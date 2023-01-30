class Api::UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
rescue_from ActiveRecord::RecordInvalid, with: :user_invalid
    skip_before_action :authorize, only: [:create, :update]
    
    #POST method for '/signup'
    #This saves a new user and their info in the backend:

    def create
        user = User.create!(newuser_params)
        user.images.attach(params[:images])
        session[:user_id] = user.id
        new_user_cart = UserCart.create!(user_id: user.id)
        new_saves_container = UserLikesContainer.create!(user_id: user.id)
        if user.valid? 
            render json: user, status: :ok
        else
            pp user.errors.full_messages
        end
        # else
        #     render json: { error: "Invalid user" }, status: :unprocessable_entity
    end


    # def update
    #     userInfo = @current_user.update!(user_params)
    #     render json: userInfo, status: :updated
    # end

    def show
        render json: @current_user
    end

    private 

    def newuser_params
        params.permit(:firstname, :lastname, :email, :password, :username, :password_confirmation, :images_url, images: [])
    end

    def user_not_found(e)
        render json: { errors: e.message}, status: :no_content
    end

    def user_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end

