class ChangeAverageRatingAndNumberReviewsOnKitchenTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :kitchens, :average_rating
    remove_column :kitchens, :number_reviews 

    add_column :kitchens, :average_rating, :integer
    add_column :kitchens, :number_reviews, :integer, default: 0
  end
end
