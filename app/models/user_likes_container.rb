class UserLikesContainer < ApplicationRecord
    belongs_to :user
    has_many :saved_items 
    has_many :items, through: :saved_items 
end
