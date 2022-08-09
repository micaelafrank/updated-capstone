class UserCartsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_item
rescue_from ActiveRecord::RecordInvalid, with: :item_invalid

    def index 
        user_carts = UserCart.all 
        render json: user_carts
    end

    def show 
        #user = find_user_cart
        userCart = UserCart.find_by(user_id: @current_user.id)
        # cart = user.user_cart_items 
        render json: userCart
    end 


    # def showCart
    #     user = User.find(params[:id])
    #     cart = user.user_cart_items 
    #     render json: cart
    # end

    def create
        new_user_cart = UserCart.create!(user_id: @current_user.id)
        render json: new_user_cart, status: :ok 
    end

    def update
        new_user_cart = UserCart.update!(isCheckedOut: true)
        render json: new_user_cart, status: :updated
    end

    # def destroy 
    #     removeItem = UserCart.Item.find(params[:id])
    #     remove.destroy 
    #     head :no_content
    # end 

    private 

    def new_user_cart_params
        params.permit(:user_id)
    end

    def find_user_cart
        UserCart.find_by(user_id: @current_user.id)
    end

    def cant_show_item
        render json: {error: "Your cart is empty"}, status: :not_available
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end