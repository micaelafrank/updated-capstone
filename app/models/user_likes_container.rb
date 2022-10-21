class UserLikesContainer < ApplicationRecord
    has_many :saved_items 
    has_many :items, through: :saved_items 
    belongs_to :user


end
