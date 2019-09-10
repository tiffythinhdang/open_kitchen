# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

yaml = YAML.load_file(File.join(Rails.root, 'db', 'seeds.yaml'))
kitchens = yaml['kitchens']

# Create kitchens
kichens.each do |kitchen|
  Kitchen.create!(kitchen)
end

#Create timeslots
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
time_blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

days.each do |day|
  time_blocks.each do |block|
    Timeslot.create!(day: day, time: block)
  end
end

