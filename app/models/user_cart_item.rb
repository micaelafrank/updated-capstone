class UserCartItem < ApplicationRecord
    belongs_to :item
    belongs_to :user_cart

    validates :item_id, uniqueness: { scope: :user_cart_id }  

end
