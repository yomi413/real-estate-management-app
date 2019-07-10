class AddingForeignKeyToBuildings < ActiveRecord::Migration[5.2]
  def change
    add_column :buildings, :user_id, :integer
  end
end
