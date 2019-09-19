# == Schema Information
#
# Table name: photos
#
#  id            :bigint           not null, primary key
#  kitchen_id    :integer          not null
#  profile_photo :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  image_url     :string           not null
#

class Photo < ApplicationRecord
  validates :kitchen_id, :image_url, presence: true

  belongs_to :kitchen
end
