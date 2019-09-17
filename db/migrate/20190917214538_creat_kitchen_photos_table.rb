class CreatKitchenPhotosTable < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :kitchen_id, null: false
      t.string :url, null: false
      t.boolean :profile_photo, default: false
      t.timestamps
    end

    add_index :photos, :kitchen_id
    add_index :photos, :profile_photo
  end
end
