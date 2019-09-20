class Api::FavoritesController < ApplicationController
  before_action :ensure_log_in

  def index
    debugger
    @favorites = current_user.favorites
    @image_urls = []
    @kitchens = []
    
    @favorites.each do |favorite|
      kitchen = Kitchen.find_by(id: favorite.kitchen_id)
      @kitchen.push(kitchen)
      @image_urls.push(kitchen.photos.where(profile_photo: true).pluck(:image_url)[0])
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
