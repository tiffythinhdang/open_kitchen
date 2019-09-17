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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
