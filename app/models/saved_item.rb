class SavedItem < ApplicationRecord
    belongs_to :item
    belongs_to :user_likes_container  


end
