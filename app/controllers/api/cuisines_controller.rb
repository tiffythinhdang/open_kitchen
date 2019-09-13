class Api::CuisinesController < ApplicationController
  def index
    @cuisines = Kitchen.pluck(:cuisine).uniq
    render json: @cuisines
  end
end
