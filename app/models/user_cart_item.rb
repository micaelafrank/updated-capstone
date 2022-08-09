class UserCartItem < ApplicationRecord
    belongs_to :item
    belongs_to :user_cart

end
