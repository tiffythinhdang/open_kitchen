class Api::CitiesController < ApplicationController
  def index
    @cities = City.pluck(:city, :country)
    render json: @cities
  end
end
