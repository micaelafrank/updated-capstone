class UserCart < ApplicationRecord
    has_many :user_cart_items 
    has_many :items, through: :user_cart_items
    belongs_to :user


    # def total_cart_items
    #     self.user_cart_items.count 
    # end

    # def cart_total 
    #     [self.user_cart_items].sum
    # end
end
