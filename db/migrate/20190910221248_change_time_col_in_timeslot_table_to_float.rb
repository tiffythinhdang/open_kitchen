class ChangeTimeColInTimeslotTableToFloat < ActiveRecord::Migration[5.2]
  def change
    remove_column :timeslots, :time
    add_column :timeslots, :time, :float, null: false
  end
end
