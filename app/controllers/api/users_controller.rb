class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    #POST method for '/signup'
    #This saves a new user and their info in the backend:

    def create
        user = User.create!(newuser_params)
        if user.valid? 
            session[:user_id] = user.id
            new_user_cart = UserCart.create!(user_id: user.id)
            # new_saves_container = UserLikesContainer.create!(user_id: user.id)
            render json: user, status: 201
        else
            render json: { error: "Invalid user" }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    private 

    def newuser_params
        params.permit(:firstname, :lastname, :email, :password, :username)
    end
end

