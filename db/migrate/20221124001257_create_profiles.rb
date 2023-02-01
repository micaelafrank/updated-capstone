class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :photo
      t.integer :user_id
    end
  end
end
