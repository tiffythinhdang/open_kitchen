# == Schema Information
#
# Table name: cities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  country    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :name, :country, presence: true
  validates :name, uniqueness: { scope: :country }
end
