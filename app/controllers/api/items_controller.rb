class Api::ItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_item
rescue_from ActiveRecord::RecordInvalid, with: :item_invalid

    def index 
        items = Item.all.order(:id)
        render json: items 
    end

    def show
        item = find_item
        render json: item 
    end

    def create 
        new_item = Item.new(item_params)
        new_item.user_id = (params[:user_id])
        new_item.images.attach(params[:images])
        pp new_item
        if new_item.save
            render json: new_item, status: :created
            pp new_item.images
        else
            pp new_item.errors.full_messages
        end
    end

    def update
        item = find_item

        if params.has_key?(:price) then
            item.update!(price: params[:price])
        end

        if params.has_key?(:itemname) then
            item.update(itemname: params[:itemname])
        end

        if params.has_key?(:description) then
            item.update(description: params[:description])
        end

        render json: item, status: :ok
    end

    def heart_change
        item = find_item
        if params.has_key?(:clickedHeart) then
            item.update!(clickedHeart: params[:clickedHeart])
        end
        render json: item, status: :ok
    end

    def cart_change
        item = find_item
        if params.has_key?(:inCartIcon) then
            item.update!(inCartIcon: params[:inCartIcon])
        end

        render json: item, status: :ok
    end


    def destroy 
        item = find_item
        item.destroy 
        head :no_content
    end

    private 

    def heart_params
        params.require(:item).permit(:itemname, :clickedHeart, :inCartIcon, :images_url, :price, :description, :color, :size, :condition, :material, :user_id, images:[])
    end

    def cart_params
        params.require(:item).permit(:inCartIcon, :id)
    end

    def item_params
        params.permit(:itemname, :clickedHeart, :inCartIcon, :images_url, :price, :description, :color, :size, :condition, :material, :user_id, images:[])
        # params.require(:item).permit(:itemname, :price, :description, :color, :size, :condition, :user_id, images: [])
    end

    def find_item
        Item.find(params[:id])
    end

    def cant_show_item
        render json: {error: "The item you're looking for is not available."}, status: :no_content
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end

