class Api::CitiesController < ApplicationController
  def index
    @cities = Kitchen.pluck(:city, :country).uniq
    render json: @cities
  end
end
