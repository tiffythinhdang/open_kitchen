@reviews.each_with_index do |review, idx|
  json.set! review.id do
    json.partial! 'review', review: review, user: @users[idx]
  end
end