class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :clickedHeart, :sold_by, :created_at, :description, :color, :price, :size, :condition, :material, :user_id, :images_url, :preview_image_url
  
  has_many :saved_items
end
