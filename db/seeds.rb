# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

ActiveRecord::Base.transaction do 
  User.destroy_all
  Kitchen.destroy_all
  Location.destroy_all
  Timeslot.destroy_all
  KitchenTimeslotCapacity.destroy_all

  yaml = YAML.load_file(File.join(Rails.root, 'db', 'seeds.yaml'))
  kitchens = yaml['kitchens']
  locations = yaml['locations']
  cuisines = yaml['cuisines']
  reviews = yaml['reviews']
  kitchen_images = yaml['kitchen_images']

  # Create locations
  locations.each do |location|
    Location.create!(location)
  end

  # Create kitchens
  kitchens.each do |kitchen|
    Kitchen.create!(kitchen)
  end

  # Create cuisines
  cuisines.each do |cuisine|
    Cuisine.create!(cuisine)
  end

  #Create users 
  user_1 = User.create!(
    # id: 1,
    first_name: "Demo",
    last_name: "User",
    email: "demo_user@gmail.com",
    password: "123456",
    location: "San Francisco"
  )

  user_2 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_3 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_4 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_5 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_6 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_7 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_8 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_9 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  user_10 = User.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    email: Faker::Internet.unique.free_email,
    password: "123456",
    location: Faker::Nation.capital_city
  )

  #Create timeslots
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  time_blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  days.each do |day|
    time_blocks.each do |block|
      Timeslot.create!(day: day, time: block)
    end
  end

  # Create kitchen_timeslot_capacities
  Kitchen.all.each do |kitchen|
    capacity = rand(10..25)
    Timeslot.all.each do |timeslot|
      KitchenTimeslotCapacity.create!( kitchen_id: kitchen.id, timeslot_id: timeslot.id, capacity: capacity )
    end
  end

 # Create reviews
  reviews.each do |review|
    Review.create!(review)
  end

 # Create photos attachment
  kitchen_images.each do |img|
    Photo.create!(img)
  end

  # Compute avg_rating and num_reviews for each kitchen
  Kitchen.all.each do |kitchen|
    num_reviews = kitchen.reviews.count
    next if num_reviews == 0
    sum_rating = kitchen.reviews.map{ |review| review.rating }.sum
    avg_rating = ( sum_rating / num_reviews ).round(2)
    kitchen.update!(number_reviews: num_reviews, average_rating: avg_rating)
  end
end

