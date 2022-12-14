class UserCartSerializer < ActiveModel::Serializer
    attributes :id, :user, :user_cart_items, :items

    # has_many :user_cart_items
    has_many :items, through: :user_cart_items
end
