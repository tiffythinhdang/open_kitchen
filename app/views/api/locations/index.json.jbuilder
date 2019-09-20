@locations.each do |location|
  json.set! location.id do
    json.id location.id
    json.city location.city
    json.country location.country
    json.image_url location.image_url
  end
end