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

class Location < ApplicationRecord
  validates :city, :country, presence: true
  validates :city, uniqueness: { scope: :country }

  has_many :kitchens
end
