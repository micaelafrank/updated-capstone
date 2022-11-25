class UserLikesContainerSerializer < ActiveModel::Serializer
  attributes :id, :user_id

  has_many :saved_items 
  has_many :items, through: :saved_items
end
