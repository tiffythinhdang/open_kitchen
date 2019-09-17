class AddOptionalRequestColToReservationsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :optional_request, :text
  end
end
