class AddLocationIdToKitchenTable < ActiveRecord::Migration[5.2]
  def change
    add_column :kitchens, :location_id, :integer, null: false
    add_index :kitchens, :location_id
  end
end
