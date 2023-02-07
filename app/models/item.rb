class Item < ApplicationRecord
    belongs_to :user
    has_many :user_cart_items
    has_many :saved_items

    has_many_attached :images
    # has_one_attached :preview_image

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

    # def preview_image_url
    #     preview_image.url
    # end

end