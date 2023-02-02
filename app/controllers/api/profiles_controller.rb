class Api::ProfilesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :photo_invalid

    def create_pic 
        new_prof = Profile.new(profile_params)
        new_prof.user_id = (params[:user_id])
        new_prof.images.attach(params[:images])
        pp new_prof
        if new_prof.save
            render json: new_prof, status: :ok
            pp new_prof.images
        else
            pp new_prof.errors.full_messages
        end
    end

    def show
        profile = Profile.find_by(user_id: @current_user.id)
        render json: profile
    end



    private 

    def profile_params
        params.permit(:images_url, :user_id, images:[])
    end

    def photo_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
