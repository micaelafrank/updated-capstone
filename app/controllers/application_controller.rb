class ApplicationController < ActionController::API
    include ActionController::Cookies 
# rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  before_action :authorize
  wrap_parameters format: []

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end
  
end