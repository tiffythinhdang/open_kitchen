class RemoveRedudantIndexOnCitiesTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :cities, :name
  end
end
