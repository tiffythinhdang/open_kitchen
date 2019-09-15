class Api::KitchensController < ApplicationController
  def index
    #Need to comeback for other params process
    req_location = kitchen_params[:location_id]
    req_party_size = kitchen_params[:party_size]
    req_timeslot_id = Timeslot.find_by(
      "time = ? and day = ?", 
      kitchen_params[:time], 
      kitchen_params[:date].to_time.strftime("%A")
    ).id

    @kitchens = Kitchen.where(location_id: req_location)

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
    params.require(:request).permit(:date, :time, :location_id, :party_size)
  end
end
