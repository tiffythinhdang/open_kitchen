@favorites.each_with_index do |favorite, idx|
  json.set! favorite.id do
    json.partial! 'favorite', favorite: favorite, kitchen: @kitchens[idx], image_url: @image_urls[idx]
  end
end