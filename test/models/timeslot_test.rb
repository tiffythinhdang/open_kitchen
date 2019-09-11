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

require 'test_helper'

class TimeslotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
