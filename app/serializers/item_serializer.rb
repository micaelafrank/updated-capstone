class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :inCartIcon, :clickedHeart, :description, :color, :price, :size, :condition, :material, :user_id, :sold_by, :images_url

  has_many :saved_items 
end
