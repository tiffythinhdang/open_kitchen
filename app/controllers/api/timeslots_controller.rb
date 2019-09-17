class Api::TimeslotsController < ApplicationController
  def index
    req_location = kitchen_params[:location_id]
    req_party_size = kitchen_params[:party_size].to_i
    req_time = kitchen_params[:time].to_i # return hour of the day
    req_date = kitchen_params[:date].to_date # return the date object of request date
    req_day = kitchen_params[:date].to_time.strftime("%A") # return day of the week

    # Generate 3 timeslots to search for availabilities based on request time & day
    req_timeslots = Timeslot.generate_searching_timeslots(req_time, req_day)

    # Get all kitchens in the search area
    kitchens_in_area = Kitchen.where(location_id: req_location)

    # Filter kitchens based on availability 
    @available_kitchens = []
    
    kitchens_in_area.each do |kitchen|
      availabilities = []
      req_timeslots.each do |timeslot|
        if kitchen.num_availabilities(req_date, timeslot.id) >= req_party_size
          availabilities.push(timeslot)
        end
      end
      @available_kitchens.push([kitchen, availabilities]) unless availabilities.empty?
    end

    render :index
  end

  private

  def timeslot_params 
    
  end
end
