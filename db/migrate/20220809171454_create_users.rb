class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username 
      t.string :firstname
      t.string :lastname
      t.string :email 
      t.boolean :is_admin, :default => false
      t.string :password_digest 
      t.string :avatar_url
      t.timestamps
    end
  end
end
