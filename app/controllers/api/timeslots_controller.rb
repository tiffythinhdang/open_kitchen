class Api::TimeslotsController < ApplicationController
  def index
    req_kitchen_id = timeslot_params[:kithchen_id]
    req_party_size = timeslot_params[:party_size].to_i
    req_time = timeslot_params[:time].to_i # return hour of the day
    req_date = timeslot_params[:date].to_date # return the date object of request date
    req_day = timeslot_params[:date].to_time.strftime("%A") # return day of the week

    # Generate 3 timeslots to search for availabilities based on request time & day
    req_timeslots = Timeslot.generate_searching_timeslots(req_time, req_day)

    # Get requested kitchen
    req_kitchen = Kitchen.find_by(id: kithchen_id)

    # Get the available timeslots
    @available_timeslots =[]
    req_timeslots.each do |timeslot|
      if req_kitchen.num_availabilities(req_date, timeslot.id) >= req_party_size
        @available_timeslots.push(timeslot)
      end
    end

    render :index
  end

  private

  def timeslot_params 
    params.require(:request).permit(:date, :time, :kithchen_id, :party_size)
  end
end
