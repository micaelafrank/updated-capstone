class SavedItem < ApplicationRecord
    belongs_to :item
    belongs_to :user_likes_container  
    validates :item_id, uniqueness: { scope: :user_likes_container_id }  


end
