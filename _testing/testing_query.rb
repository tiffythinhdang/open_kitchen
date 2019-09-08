params[:party_size]: 2
params[:date]: September 14, 2019
params[:time_slot_id]: 10 
params[:city]: San Francisco

kitchens_in_area = Kitchen.where(city: "San Francisco")
  .select(:id)

Reservation.where("kitchen_id in ?", kitchens_in_area).where(time_slot_id: 10).where(date: "2019-09-14").group(:kitchen_id)



SELECT
  kitchen_id
FROM
  kitchen_timeslot_capacities
JOIN
  kitchens 
  ON kitchen_timeslot_capacities.kitchen_id = kitchens.id
JOIN
  reservations 
  ON kitchens.id = reservations.kitchen_id
  ON kitchen_timeslot_capacities.timeslot_id = reservations.timeslot_id
WHERE
  kitchens.city = "San Francisco" AND
  kitchen_timeslot_capacities.timeslot_id = 10 AND
  reservations.date = "2019-09-14"
  # other filters can be
  kitchens.cost < 3
  kitchens.cuisine IN ("Asian", "American")
  kitchens.average_rating > 4
  # end
GROUP BY
  kitchen_id
HAVING 
  (SUM(reservations.party_size) + ? ) <= MAX kitchen_timeslot_capacities.capacity






