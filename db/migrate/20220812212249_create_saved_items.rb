class CreateSavedItems < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_items do |t|
      t.integer :user_likes_container_id 
      t.integer :item_id 
      t.boolean :isHearted, default: true
      t.timestamps
    end
  end
end
