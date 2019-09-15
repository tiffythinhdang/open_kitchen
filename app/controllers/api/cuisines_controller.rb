class Api::CuisinesController < ApplicationController
  def index
    @cuisines = Cuisine.pluck(:name)
    render json: @cuisines
  end
end
