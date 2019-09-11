# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  kitchen_id  :integer          not null
#  timeslot_id :integer          not null
#  date        :date             not null
#  party_size  :integer          not null
#  state       :string           default("upcoming")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reservation < ApplicationRecord
  validates :user_id, :kitchen_id, :timeslot_id, :date, :party_size, :state, presence: true
  validates :state, inclusion: { in: ["upcoming", "cancelled", "fulfilled"] }
end
