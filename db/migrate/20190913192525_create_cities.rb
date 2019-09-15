class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :country, null: false

      t.timestamps
    end
    add_index :cities, :name
    add_index :cities, [:name, :country], unique: true
  end
end
