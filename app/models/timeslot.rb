# == Schema Information
#
# Table name: timeslots
#
#  id         :bigint           not null, primary key
#  day        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  time       :integer          not null
#

class Timeslot < ApplicationRecord
  validates :day, :time, presence: true

  has_many :reservations
  has_many :kitchen_timeslot_capacities
end
