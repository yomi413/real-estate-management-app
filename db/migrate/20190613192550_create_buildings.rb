class CreateBuildings < ActiveRecord::Migration[5.2]
  def change
    create_table :buildings do |t|
      t.string :address
      t.string :description
      t.string :image
      t.integer :numberOfApartments

      t.timestamps
    end
  end
end
