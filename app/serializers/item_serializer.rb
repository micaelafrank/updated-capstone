class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :sold_by, :created_at, :description, :color, :price, :size, :condition, :material, :user_id, :images_url

end
