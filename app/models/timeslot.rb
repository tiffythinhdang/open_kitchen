# == Schema Information
#
# Table name: timeslots
#
#  id         :bigint           not null, primary key
#  time       :integer          not null
#  day        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Timeslot < ApplicationRecord
  validates :day, :time, presence: true

  has_many :reservations
  has_many :kitchen_timeslot_capacities

  def self.generate_searching_time_range(req_time)
    # Get 2 extra times
    before_req_time = req_time - 1
    after_req_time = req_time + 1
    [ before_req_time, req_time, after_req_time ]
  end

  def self.generate_searching_timeslots(req_time, req_day)
    req_times = Timeslot.generate_searching_time_range(req_time)
    #Get timselot_ids based on hour of the day and day of the week
    Timeslot.where(
      "time IN (?) and day = ?", 
      req_times, 
      req_day
    )
  end
end
