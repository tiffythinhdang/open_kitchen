# == Schema Information
#
# Table name: timeslots
#
#  id         :bigint           not null, primary key
#  day        :string           not null
#  time       :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Timeslot < ApplicationRecord
  validates :day, :time, presence: true
end
