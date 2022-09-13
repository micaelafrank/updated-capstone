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
        liked = SavedItem.create!(saveditem_params)
        render json: liked, status: :created
    end

    # def update
    #     liked = @item.update!(save_params)
    #     render json: liked, status: :updated
    # end

    def destroy
        saved = SavedItem.find(params[:id]).destroy
        head :no_content
    end

    private

    def saveditem_params
        params.permit(:item_id, :id, :user_likes_container_id)
    end

    def cant_show_favorite 
        render json: {error: "Item not available"}, status: :no_content
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
