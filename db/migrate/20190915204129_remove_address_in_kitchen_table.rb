class RemoveAddressInKitchenTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :kitchens, :address
  end
end
