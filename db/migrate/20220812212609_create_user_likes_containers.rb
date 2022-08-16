class CreateUserLikesContainers < ActiveRecord::Migration[7.0]
  def change
    create_table :user_likes_containers do |t|
      t.integer :user_id
      t.timestamps
    end
  end
end
