@kitchens.each do |kitchen|
  json.set! kitchen.id do
    json.extract! kitchen, :id, :name, :cuisine, :cost, :address, :average_rating, :number_reviews
  end
end