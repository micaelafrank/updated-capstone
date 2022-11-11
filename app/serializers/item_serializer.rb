class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemname, :created_at, :description, :color, :price, :size, :condition, :material, :user_id, :images_url

end
