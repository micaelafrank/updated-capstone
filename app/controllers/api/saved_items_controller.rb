class Api::SavedItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :cant_show_favorite
    rescue_from ActiveRecord::RecordInvalid, with: :item_invalid

    def index
        saved_items = SavedItem.all
        render json: saved_items
    end

    def show 
        item = SavedItem.find(params[:id])
        render json: item
    end

    def create
        liked = SavedItem.find_or_create_by(saveditem_params) 
        liked.save
        render json: liked, status: :created
    end

    def emptycart
        likes = UserLikesContainer.find_by(user_id: @current_user.id)
        my_likes = likes.saved_items
        my_likes.each do |item|
            item_one = item.item
            item_one.destroy
        end
        my_likes.destroy_all
        render json: likes
        # myItems = UserCartItem.all 
        # myItems.destroy_all 
        # for item in myItems do 
        #     item = UserCartItem.find_by(item_id: params[:id])
        #     item.destroy
        # end
        head :no_content
    end 
    

    def destroy
        likes = SavedItem.where(item_id: params[:item_id])
        likes.destroy_all 
        head :no_content
    end

    private

    def saveditem_params
        params.require(:saved_item).permit(:item_id, :user_likes_container_id)
    end

    def cant_show_favorite 
        render json: {error: "Item not available"}, status: :no_content
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
