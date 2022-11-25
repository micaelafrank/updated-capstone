class Item < ApplicationRecord
    belongs_to :user
    has_many :user_cart_items
    has_many :saved_items

    has_many_attached :images
    validates :images, presence: true, allow_blank: true


    def sold_by
        seller = user.id
        User.find(seller).username
    end

    def images_url
      images
      imagess = []
      for image in images do
          imagess.push(image.url)
      end
      return imagess
  end

end