@available_timeslots.each do |timeslot|
  json.set! timeslot.id do
    json.extract! timeslot, :id, :time, :day
    json.date @req_date
    json.party_size @req_party_size
  end
end