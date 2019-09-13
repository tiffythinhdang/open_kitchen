class CreateCuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :cuisines do |t|
      t.string :name, null: false, unique: true

      t.timestamps
    end
    add_index :cuisines, :name
  end
end
