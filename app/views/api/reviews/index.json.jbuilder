@reviews.each_with_index do |review, idx|
  json.partial! 'review', review: review, user: @users[idx]
end