# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  kitchen_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ApplicationRecord
  validates :user_id, :kitchen_id, presence: true
  validates :user_id, uniqueness: { scope: :kitchen_id }
  
  belongs_to :user
  belongs_to :kitchen
end
