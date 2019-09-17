# == Schema Information
#
# Table name: reservations
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  kitchen_id       :integer          not null
#  timeslot_id      :integer          not null
#  date             :date             not null
#  party_size       :integer          not null
#  state            :string           default("upcoming")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  optional_request :text
#

class Reservation < ApplicationRecord
  validates :user_id, :kitchen_id, :timeslot_id, :date, :party_size, :state, presence: true
  validates :state, inclusion: { in: ["upcoming", "cancelled", "fulfilled"] }
  
  belongs_to :user
  belongs_to :kitchen
  belongs_to :timeslot

  def self.is_possible?(reservation)
    kitchen = Kitchen.find_by(id: reservation.kitchen_id)
    kitchen.num_availabilities(
      reservation.date, 
      reservation.timeslot_id
    ) >= reservation.party_size
  end
end
