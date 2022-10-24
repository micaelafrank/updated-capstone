class Api::SessionsController < ApplicationController
    #POST for '/login'
    #finds the user data from the username and if the password matches, it 
    #saves the user information in the sessions and stays logged in.
    skip_before_action :authorize, only: :create

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Invalid username or password"] }, status: :unprocessable_entity 
        end
    end

    #DELELTE method for '/logout'
    #deletes the logged-in user information from the session.

    def destroy 
        session.delete :user_id
        head :no_content
    end 

end
