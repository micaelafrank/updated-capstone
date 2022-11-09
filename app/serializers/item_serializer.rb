class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :created_at, :sold_by, :description, :color, :price, :size, :condition, :material, :user_id, :images_url

end
