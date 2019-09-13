@cities.each do |city|
  json.set! city.id do
    json.city city.name
    json.country city.country
  end
end