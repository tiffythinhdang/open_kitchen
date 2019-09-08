# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

yaml = YAML.load_file(File.join(Rails.root, 'db', 'seeds.yaml'))
users = yaml['users']

# Create users
# User.create!(users)
users.each do |user|
  User.create!(user)
end
