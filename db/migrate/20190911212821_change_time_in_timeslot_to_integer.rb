class ChangeTimeInTimeslotToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :timeslots, :time
    add_column :timeslots, :time, :integer, null: false
  end
end
