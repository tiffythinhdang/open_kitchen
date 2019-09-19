@available_kitchens.each do |kitchen_with_timeslot|
  json.set! kitchen_with_timeslot.first.id do
    json.extract! kitchen_with_timeslot.first, 
      :id, 
      :name, 
      :cuisine, 
      :cost, 
      :location_id, 
      :region, 
      :average_rating, 
      :number_reviews
    json.available_timeslots kitchen_with_timeslot[1]
    json.profile_photo kitchen_with_timeslot.last
  end
end