class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string :uid
      t.belongs_to :user
      
      t.timestamps
    end
  end
end
