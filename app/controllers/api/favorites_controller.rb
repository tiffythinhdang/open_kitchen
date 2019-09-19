class Api::FavoritesController < ApplicationController
  before_action :ensure_log_in

  def index
    @favorites = current_user.favorites
    @favorite_kitchens = @favorites.map do |favorite|
      Kitchen.find_by(id: favorite.kitchen_id)
    end
    render :index
  end

  def create 
    @favorite = current_user.favorites.new(favorite_params)

    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])

    if @favorite.user_id = current_user.id
      @favorite.destroy
      render json: @favorite
    else
      render json: ["Cannot delete other favorites!"], status: 422
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :kitchen_id)
  end
end
