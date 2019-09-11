class AddLatAndLngToKitchensTable < ActiveRecord::Migration[5.2]
  def change
    add_column :kitchens, :lat, :float, null: false
    add_column :kitchens, :lng, :float, null: false
  end
end
