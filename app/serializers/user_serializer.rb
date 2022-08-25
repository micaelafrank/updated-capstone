class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :fullname, :user_cart, :items, :user_likes_container

  has_one :user_likes_container
  has_one :user_cart 

end
