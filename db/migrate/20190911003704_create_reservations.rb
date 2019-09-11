class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :kitchen_id, null: false
      t.integer :timeslot_id, null: false
      t.date :date, null: false
      t.integer :party_size, null: false
      t.string :state, default: "upcoming"

      t.timestamps
    end

    add_index :reservations, :user_id
    add_index :reservations, :kitchen_id
    add_index :reservations, :timeslot_id
    add_index :reservations, :date
    add_index :reservations, :state
  end
end
