class Api::SavedItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :cant_show_favorite
    rescue_from ActiveRecord::RecordInvalid, with: :item_invalid
    skip_before_action :authorize
    # before_action :set_item, only: [:destroy]

    def index
        saved_items = SavedItem.all
        render json: saved_items
    end

    def show 
        item = SavedItem.find(params[:id])
        render json: item
    end


    def destroy
        saved_item = SavedItem.find_by(item_id: params[:id]) 
        saved_item.destroy
        head :no_content
        # byebug
    end

    def create
        # userid = User.find(id: @current_user.id)
        saves = SavedItem.create!(saveditem_params)
        render json: saves, status: :created
    end
    #     if newsave.save 
    #         render json: newsave, status: 201
    #     end
    # end


    ## can also be written like: 
    ## User.create_with(last_name: 'Johansson').find_or_create_by(first_name: 'Scarlett')
        # => #<User id: 2, first_name: "Scarlett", last_name: "Johansson">

    # def destroy
    #     find_save = SavedItem.find_by(item_id: params[:id])
    #     find_save.destroy
    #     # SavedItem.where(item_id: @saved.item_id).destroy_all
    #     head :no_content
    # end

    def emptysaves
        SavedItem.where(user_likes_container_id: params[:user_likes_container_id]).destroy_all
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
