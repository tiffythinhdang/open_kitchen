class CreateKitchenTimeslotCapacities < ActiveRecord::Migration[5.2]
  def change
    create_table :kitchen_timeslot_capacities do |t|
      t.integer :kitchen_id, null: false
      t.integer :timeslot_id, null: false
      t.integer :capacity, null: false

      t.timestamps
    end

    add_index :kitchen_timeslot_capacities, :kitchen_id
    add_index :kitchen_timeslot_capacities, :timeslot_id
    add_index :kitchen_timeslot_capacities, [:kitchen_id, :timeslot_id], unique: true
  end
end
