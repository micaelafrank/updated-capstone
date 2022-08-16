class User < ApplicationRecord
    has_many :items 
    has_secure_password 
    has_one :user_cart
    has_one :user_likes_container 
    has_many :user_cart_items, through: :user_cart
    has_many :saved_items, through: :user_likes_container 
    validates :email, uniqueness: true
    validates :username, uniqueness: true
    has_many_attached :images

    def images_url
      images
      imagess = []
      for image in images do
          imagess.push(image.url)
      end
      return imagess
    end

    # has_one_attached :avatar 
    # do |attachable|
    #     attachable.variant :thumb, resize_to_limit: [100, 100]
    # end

    def fullname
        self.firstname + ' ' + self.lastname
    end

    # def show_cart
    #     cart = self.user_cart.id 
    # end
    
end
