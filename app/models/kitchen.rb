# == Schema Information
#
# Table name: kitchens
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  cuisine        :string           not null
#  cost           :integer          not null
#  location_id    :integer          not null
#  region         :string           not null
#  phone_number   :string           not null
#  menu           :text             not null
#  lat            :float            not null
#  lng            :float            not null
#  number_reviews :integer          default(0)
#  description    :text             not null
#  host_infor     :text             not null
#  average_rating :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Kitchen < ApplicationRecord
  validates :name, :cuisine, :cost, :region, :location_id, :phone_number, :menu, presence: true

  belongs_to :location
  has_many :kitchen_timeslot_capacities
  has_many :reservations

end
