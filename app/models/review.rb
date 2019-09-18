# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  user_id    :integer          not null
#  kitchen_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :kitchen_id, :user_id, :body, :rating, presence: true
  validates :rating, numericality: { greater_than: 0, less_than_or_equal_to: 5 }

  belongs_to :kitchen
  belongs_to :user

end
