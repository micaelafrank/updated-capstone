class SavedItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :cant_show_favorite
    rescue_from ActiveRecord::RecordInvalid, with: :item_invalid


    def index
        saved_items = SavedItem.all 
        render json: saved_items
    end

    def create 
        new_favorite_item = SavedItem.create!(save_params)
        render json: new_favorite_item, status: :created 
    end

    def destroy
        @saved = SavedItem.find_by(item_id: params[:id])
        if @saved.present?
            @saved.destroy
        end
    end

    private 

    def save_params
        params.permit(:item_id, :user_likes_container_id)
    end

    def cant_show_favorite 
        render json: {error: "Item not available"}, status: :no_content
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
