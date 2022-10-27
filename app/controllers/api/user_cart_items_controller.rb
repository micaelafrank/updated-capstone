class Api::UserCartItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_user_cart_items
rescue_from ActiveRecord::RecordInvalid, with: :item_invalid

# skip_before_action :authorize, only: :create
    def index
        user_cart_items = UserCartItem.all 
        render json: user_cart_items
    end

    def show
        user_cart_items = UserCartItem.find(params[:id])
        render json: user_cart_items 
    end

    def create 
        new_usercartitems = UserCartItem.create!(uci_params)
        render json: new_usercartitems, status: :ok 
    end

    def update
        user_cart_items = UserCartItem.find(params[:id])
        user_cart_items.update!(uci_params)
        render json: user_cart_items, status: :updated 
    end

    def removefromcart
        myitem = UserCartItem.find(params[:id])
        myitem.destroy!
        head :no_content
    end

    def emptycart
        cart = UserCart.find_by(user_id: @current_user.id)
        cart_items = cart.user_cart_items
        cart_items.each do |item|
            item_one = item.item
            item_one.destroy
        end
        cart_items.destroy_all
        render json: cart
        # myItems = UserCartItem.all 
        # myItems.destroy_all 
        # for item in myItems do 
        #     item = UserCartItem.find_by(item_id: params[:id])
        #     item.destroy
        # end
        head :no_content
    end 

      # DELETE /carts/1

  private
    # def set_cart
    #   @cart = UserCart.find(params[:id])
    # end

    def uci_params
        params.permit(:item_id, :id, :user_cart_id)
    end

    def cant_show_user_cart_items
        render json: {error: "Item no longer available"}, status: :no_content
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end