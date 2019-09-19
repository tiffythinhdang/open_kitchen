@reservations.each_with_index do |reservation, idx|
  json.set! reservation.id do
    json.partial! 'reservation', reservation: reservation
    json.image_url @image_urls[idx]
    json.kitchen_name @kitchen_names[idx]
  end
end