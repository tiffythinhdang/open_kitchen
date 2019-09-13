class Api::KitchensController < ApplicationController
  def index
    #Need to comeback for other params process
    req_city = kitchen_params[:city]
    req_country = kitchen_params[:country]
    req_party_size = kitchen_params[:party_size]
    req_timeslot_id = Timeslot.find_by(
      "time = ? and day = ?", 
      kitchen_params[:time], 
      kitchen_params[:date].to_time.strftime("%A")
    ).id

    @kitchens = Kitchen.where("city = ? and country = ?", req_city, req_country)

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
