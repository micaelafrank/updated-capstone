class SavedItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :user_likes_container_id
  belongs_to :item
  belongs_to :user_likes_container

  
end
