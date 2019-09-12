class Api::KitchensController < ApplicationController
  def index
    debugger
    #Need to comeback for other params process
    req_city = kitchen_params[:city]
    # req_country = kitchen_params[:country]
    @kitchens = Kitchen.where("city = ?", req_city)#.where(country: req_country)

    render :index
  end

  def show
    @kitchen = Kitchen.find_by(id: params[:id])

    if @kitchen
      render :show
    else
      render json: ["Sorry, this kitchen is not available"], status: 404
    end
  end

  private

  def kitchen_params
    params.require(:request).permit(:date, :time, :city, :country, :party_size)
  end
end
