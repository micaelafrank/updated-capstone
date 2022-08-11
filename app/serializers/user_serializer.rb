class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :fullname, :user_cart, :avatar_url, :items
end
