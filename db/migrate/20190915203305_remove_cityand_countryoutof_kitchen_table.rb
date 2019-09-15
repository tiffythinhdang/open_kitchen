class RemoveCityandCountryoutofKitchenTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :kitchens, :city
    remove_column :kitchens, :country
  end
end
