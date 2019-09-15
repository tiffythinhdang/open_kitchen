@kitchens.each do |kitchen|
  json.set! kitchen.id do
    json.extract! kitchen, :id, :name, :cuisine, :cost, :location_id, :region, :average_rating, :number_reviews
  end
end