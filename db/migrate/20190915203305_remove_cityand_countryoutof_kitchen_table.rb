class RemoveCityandCountryoutofKitchenTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :kitchens, :city
    remove_column :kitchens, :country

    remove_index :kitchens, :city
    remove_index :kitchens, :country
  end
end
