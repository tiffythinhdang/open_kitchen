@available_timeslots.each do |timeslot|
  json.set! timeslot.id do
    json.extract! timeslot, :id, :time, :day
  end
end