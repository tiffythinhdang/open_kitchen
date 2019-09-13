class ChangeAvgRatingInKitchensTableToFLoat < ActiveRecord::Migration[5.2]
  def change
    remove_column :kitchens, :average_rating
    add_column :kitchens, :average_rating, :float
  end
end
