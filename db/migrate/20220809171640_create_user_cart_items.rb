class CreateUserCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :user_cart_items do |t|
      t.integer :user_cart_id 
      t.integer :item_id 
      t.boolean :cartIcon, default: false

      t.timestamps
    end
  end
end
