# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  city       :string           not null
#  country    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
