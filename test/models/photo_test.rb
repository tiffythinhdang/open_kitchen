# == Schema Information
#
# Table name: photos
#
#  id            :bigint           not null, primary key
#  kitchen_id    :integer          not null
#  url           :string           not null
#  profile_photo :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
