@cities.each do |city|
  json.set! city.id do
    json.id city.id
    json.city city.name
    json.country city.country
  end
end