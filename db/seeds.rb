# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do 
  yaml = YAML.load_file(File.join(Rails.root, 'db', 'seeds.yaml'))
  kitchens = yaml['kitchens']
  users = yaml['users']

  # Create kitchens
  kichens.each do |kitchen|
    Kitchen.create!(kitchen)
  end

  #Create timeslots
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  time_blocks = [9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 15.5, 16.0, 16.5, 17.0, 17.5, 18.0, 18.5, 19.0, 19.5, 20.0]

  days.each do |day|
    time_blocks.each do |block|
      Timeslot.create!(day: day, time: block)
    end
  end

  #Create kitchen_timeslot_capacities
  Timeslot.all.each do |timeslot|
    Kitchen.all.each do |kitchen|
      capacity = rand(10..25)
      KitchenTimeslotCapacity.create!( kitchen_id: kitchen.id, timeslot_id: timeslot.id, capacity: capacity )
    end
  end

end

