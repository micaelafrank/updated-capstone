class SavedItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :user_likes_container_id 

end
