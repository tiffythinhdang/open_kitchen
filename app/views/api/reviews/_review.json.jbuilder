json.set! review.id do
  json.extract! review, *review.attributes.keys 
  json.user_initials (user.first_name[0] + user.last_name[0])
  json.user_location user.location
end