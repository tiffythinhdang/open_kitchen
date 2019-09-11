# == Schema Information
#
# Table name: kitchens
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  cuisine        :string           not null
#  cost           :integer          not null
#  address        :string           not null
#  city           :string           not null
#  country        :string           not null
#  phone_number   :string           not null
#  menu           :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :float            not null
#  lng            :float            not null
#  average_rating :integer
#  number_reviews :integer          default(0)
#

require 'test_helper'

class KitchenTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
