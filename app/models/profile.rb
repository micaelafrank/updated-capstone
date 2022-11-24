class Profile < ApplicationRecord
    belongs_to :user
    has_many_attached :avatar 
    
    def avatar_url
        avatars
        avatarss = []
        for avatar in avatars do
            avatarss.push(avatar.url)
        end
        return avatarss
    end
end
