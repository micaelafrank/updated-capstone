class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :fullname, :user_cart, :items, :user_likes_container, :user_cart, :user_cart_items

  has_one :user_likes_container
  has_one :user_cart 
  has_many :saved_items, through: :user_likes_container
  has_many :items

end
