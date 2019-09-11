class AddHostInforColToKitchenTable < ActiveRecord::Migration[5.2]
  def change
    add_column :kitchens, :host_infor, :text, null: false
  end
end
