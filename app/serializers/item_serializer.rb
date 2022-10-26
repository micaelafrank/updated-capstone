class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :inCartIcon, :clickedHeart, :sold_by, :description, :color, :price, :size, :condition, :material, :user_id, :sold_by, :images_url

end
