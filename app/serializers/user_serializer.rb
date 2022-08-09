class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :user_cart, :items
end
