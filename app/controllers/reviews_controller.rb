class ReviewsController < ApplicationController
  before_action :ensure_log_in

  def index
    @kitchen = Kithchen.find_by(id: params[:kitchen_id])
    @reviews = @kitchen_id.reviews
  end

  def create
    @review = current_user.reviews.new(review_params)
    kitchen_id = review_params[:kitchen_id]
    
    if @review.save
      Kitchen.increase_num_reviews(kitchen_id)
      Kitchen.recalculate_avg_rating(kitchen_id, "create", @review.rating)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    kitchen_id = review_params[:kitchen_id]
    old_rating = @review.rating
    
    if @review.update(review_params)
      Kitchen.recalculate_avg_rating(kitchen_id, "update", @review.rating, old_rating)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    kitchen_id = review_params[:kitchen_id]
    rating = @review.rating

    if @review.user_id == current_user.id
      @review.transaction do
        @review.destroy
        Kitchen.decrease_num_reviews(kitchen_id)
        Kitchen.recalculate_avg_rating(kitchen_id, "destroy", @review.rating)
      end
      render json: @review
    else
      render json: ["Cannot delete comment that are not yours!"]
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :kitchen_id)
  end
end
