class AddRegionColToKitchenTable < ActiveRecord::Migration[5.2]
  def change
    add_column :kitchens, :region, :string, null: false
  end
end
