class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :firstname, :lastname, :fullname, :user_cart, :items, :user_likes_container, :images_url

  # has_one :user_likes_container
  # has_one :user_cart 
  # has_many :saved_items, through: :user_likes_container
  has_many :items

end
