class UserLikesContainersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_favorite
rescue_from ActiveRecord::RecordInvalid, with: :favorite_invalid

    def show 
        userLikes = UserLikesContainer.find_by(user_id: @current_user.id)
        # cart = user.user_cart_items 
        render json: userLikes
    end 

    def create 
        new_saves_container = UserLikesContainer.create!(user_id: @current_user.id)
        render json: new_saves_container, status: :ok 
    end

    def destroy 
        item = UserLikesContainer.find_by(item_id: params[:item_id])
        item.destroy
        head :no_content
    end

    private 

    # def new_favorite_bucket
    #     params.permit(:user_id)
    # end

    def cant_show_favorite
        render json: {error: "Favorited item not available"}, status: :not_available
    end

    def favorite_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
