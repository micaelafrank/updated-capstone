class UserLikesContainerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :saved_items

end
