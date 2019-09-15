# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_15_184316) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "country"], name: "index_cities_on_name_and_country", unique: true
  end

  create_table "cuisines", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cuisines_on_name"
  end

  create_table "kitchen_timeslot_capacities", force: :cascade do |t|
    t.integer "kitchen_id", null: false
    t.integer "timeslot_id", null: false
    t.integer "capacity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id", "timeslot_id"], name: "index_kitchen_timeslot_capacities_on_kitchen_id_and_timeslot_id", unique: true
    t.index ["kitchen_id"], name: "index_kitchen_timeslot_capacities_on_kitchen_id"
    t.index ["timeslot_id"], name: "index_kitchen_timeslot_capacities_on_timeslot_id"
  end

  create_table "kitchens", force: :cascade do |t|
    t.string "name", null: false
    t.string "cuisine", null: false
    t.integer "cost", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.string "phone_number", null: false
    t.text "menu", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.integer "number_reviews", default: 0
    t.text "description", null: false
    t.text "host_infor", null: false
    t.float "average_rating"
    t.index ["city"], name: "index_kitchens_on_city"
    t.index ["cost"], name: "index_kitchens_on_cost"
    t.index ["country"], name: "index_kitchens_on_country"
  end

  create_table "locations", force: :cascade do |t|
    t.string "city", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city", "country"], name: "index_locations_on_city_and_country", unique: true
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "kitchen_id", null: false
    t.integer "timeslot_id", null: false
    t.date "date", null: false
    t.integer "party_size", null: false
    t.string "state", default: "upcoming"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date"], name: "index_reservations_on_date"
    t.index ["kitchen_id"], name: "index_reservations_on_kitchen_id"
    t.index ["state"], name: "index_reservations_on_state"
    t.index ["timeslot_id"], name: "index_reservations_on_timeslot_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "timeslots", force: :cascade do |t|
    t.string "day", null: false
    t.integer "time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
