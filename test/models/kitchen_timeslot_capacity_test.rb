# == Schema Information
#
# Table name: kitchen_timeslot_capacities
#
#  id          :bigint           not null, primary key
#  kitchen_id  :integer          not null
#  timeslot_id :integer          not null
#  capacity    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class KitchenTimeslotCapacityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
