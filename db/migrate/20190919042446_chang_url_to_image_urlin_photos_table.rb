class ChangUrlToImageUrlinPhotosTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :url
    add_column :photos, :image_url, :string, null: false
  end
end
