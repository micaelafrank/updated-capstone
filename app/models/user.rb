class User < ApplicationRecord
    has_many :items 
    has_secure_password 
    has_one :user_cart
    has_many :user_cart_items, through: :user_cart
    validates :email, :username, uniqueness: true

    # def fullname
    #     self.firstname + ' ' + self.lastname
    # end

    # def show_cart
    #     cart = self.user_cart.id 
    # end
    
end
