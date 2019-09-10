class CreateKitchens < ActiveRecord::Migration[5.2]
  def change
    create_table :kitchens do |t|
      t.string :name, null: false
      t.string :cuisine, null: false
      t.integer :cost, null: false
      t.integer :average_rating, null: false
      t.integer :number_reviews, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.string :phone_number, null: false
      t.text :menu, null: false

      t.timestamps
    end

    add_index :kitchens, :cost
    add_index :kitchens, :average_rating
    add_index :kitchens, :city
    add_index :kitchens, :country
  end
end
