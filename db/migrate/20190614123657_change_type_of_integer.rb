class ChangeTypeOfInteger < ActiveRecord::Migration[5.2]
  def up
    change_column :buildings, :numberOfApartments, :string
  end

  def down
    change_column :buildings, :numbersOfApartments, :integer
  end 
end
