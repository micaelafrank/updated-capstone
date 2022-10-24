class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :inCartIcon, :clickedHeart, :description, :color, :price, :size, :condition, :material, :user_id, :images_url

  has_many :saved_items 
  belongs_to :item 
  has_many :user_cart_items
end
