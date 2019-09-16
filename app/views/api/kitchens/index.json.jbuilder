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
    json.set! :available_timeslot_ids do
      kitchen_with_timeslot.last.each do |timeslot|
        json.set! timeslot.id do 
          json.extract! timeslot, :id, :time, :day
        end
      end
    end
  end
end