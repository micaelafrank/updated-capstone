class Profile < ApplicationRecord
    belongs_to :user
    has_many :saved_items
    has_many :items
end