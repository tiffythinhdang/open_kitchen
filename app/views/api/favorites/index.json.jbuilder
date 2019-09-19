@favorites.each_with_index do |favorite, idx|
  json.set! favorite.id do
    json.partial! 'favorite', review: review, kitchen: @kitchens[idx]
  end
end