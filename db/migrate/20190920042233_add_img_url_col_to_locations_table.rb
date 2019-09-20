class AddImgUrlColToLocationsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :image_url, :string
  end
end
