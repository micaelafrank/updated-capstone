class Api::ItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_item
rescue_from ActiveRecord::RecordInvalid, with: :item_invalid

    def index 
        items = Item.all.order(id: :desc)
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
            render json: new_item, status: :ok
            pp new_item.images
        else
            pp new_item.errors.full_messages
        end
    end

    # get items where user_id = current_user 
    def myitemsforsale 
        selling = Item.where(user_id: @current_user.id)
        items = selling.order(id: :desc)
        render json: items 
    end

    # POST "/add-images" 
    # item.images.attach(params[:images])
    # @item.images.attach(io: File.open('/path/to/file'), filename: 'file.pdf')
    # url_for(@item.images)

    def add_images
        item = Item.find(params[:id])
        item.images.attach(params[:images])
        render json: item, status: :ok
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
        item.update_attribute(:clickedHeart, true)
    end


    def update
        item = find_item
        item.update!(item_params)
        render json: item, status: :ok
    end


    # def add_preview_image
    #     item = Item.find(params[:id])
    #     if item.preview_image.attached? then
    #         item.preview_image.purge
    #     end
    #     item.preview_image.attach(params[:preview_image])
    #     render json: item, status: :ok
    # end



    def destroy 
        item = find_item
        item.destroy
        head :no_content
    end

    private 

    def item_params
        params.permit(:itemname, :clickedHeart, :images_url, :price, :description, :color, :size, :condition, :material, :user_id, images: [])
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

