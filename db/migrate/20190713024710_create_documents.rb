class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :deed
      t.string :mortgage_1
      t.string :mortgage_2
      t.string :satisfaction_of_mortgage_1
      t.string :satisfaction_of_mortgage_2
      t.string :certificate_of_occupancy
      t.belongs_to :building

      t.timestamps
    end
  end
end
