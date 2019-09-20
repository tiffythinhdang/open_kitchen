# == Schema Information
#
# Table name: kitchens
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  cuisine        :string           not null
#  cost           :integer          not null
#  location_id    :integer          not null
#  region         :string           not null
#  phone_number   :string           not null
#  menu           :text             not null
#  lat            :float            not null
#  lng            :float            not null
#  number_reviews :integer          default(0)
#  description    :text             not null
#  host_infor     :text             not null
#  average_rating :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Kitchen < ApplicationRecord
  validates :name, :cuisine, :cost, :region, :location_id, :phone_number, :menu, presence: true

  belongs_to :location
  has_many :kitchen_timeslot_capacities
  has_many :reservations
  has_many :reviews
  has_many :photos
  has_many :favorites
  has_many :followers, 
    through: :favorites,
    source: :user

  # Reservation helper methods
  def capacity(timeslot_id)
    self.kitchen_timeslot_capacities.find_by(timeslot_id: timeslot_id).capacity
  end

  def find_reservations(date, timeslot_id, state)
    self.reservations.where(
      date: date, 
      timeslot_id: timeslot_id,
      state: state
    )
  end

  def expecting_booked_party_size(date, timeslot_id)
    self.find_reservations(date, timeslot_id, "upcoming").pluck(:party_size).sum
  end

  def num_availabilities(date, timeslot_id)
    self.capacity(timeslot_id) - self.expecting_booked_party_size(date, timeslot_id)
  end

  # Review/Rating helper methods - Need to combine

  def self.recalculate_avg_rating_and_num_reviews(kitchen_id, action, rating, old_rating = nil)
    kitchen = Kitchen.find_by(id: kitchen_id)
    curr_avg_rating = kitchen.average_rating
    curr_num_reviews = kitchen.number_reviews

    if action == "create"
      new_num_reviews = curr_num_reviews + 1
      new_avg_rating = (curr_avg_rating * curr_num_reviews + rating) / new_num_reviews
    elsif action == "update"
      new_num_reviews = curr_num_reviews
      new_avg_rating = (curr_avg_rating * curr_num_reviews - old_rating + rating) / new_num_reviews
    elsif action =="destroy"
      new_num_reviews = curr_num_reviews - 1
      new_avg_rating = (curr_avg_rating * curr_num_reviews - rating) / new_num_reviews
    end

    kitchen.update!(average_rating: new_avg_rating, number_reviews: new_num_reviews)
  end
end
