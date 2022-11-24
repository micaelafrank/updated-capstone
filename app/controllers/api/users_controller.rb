class Api::UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
rescue_from ActiveRecord::RecordInvalid, with: :user_invalid
    skip_before_action :authorize, only: [:create, :update]
    
    #POST method for '/signup'
    #This saves a new user and their info in the backend:

    def create
        user = User.create!(newuser_params)
        if user.valid? 
            session[:user_id] = user.id
            new_user_cart = UserCart.create!(user_id: user.id)
            new_saves_container = UserLikesContainer.create!(user_id: user.id)
            render json: user, status: :created
        # else
        #     render json: { error: "Invalid user" }, status: :unprocessable_entity
        end
    end

    # def update
    #     userInfo = @current_user.update!(user_params)
    #     render json: userInfo, status: :updated
    # end

    def show
        render json: @current_user
    end

    private 

    # def user_params
    #     params.permit(:id, :profilepic, :username)
    # end

    def newuser_params
        params.permit(:firstname, :lastname, :email, :password, :username, :password_confirmation)
    end

    def user_not_found(e)
        render json: { errors: e.message}, status: :no_content
    end

    def user_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end

