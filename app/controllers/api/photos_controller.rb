class Api::PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :photo_invalid
    skip_before_action :authorize

    def create 
        new_profpic = Photo.new(avatar_params)
        new_profpic.avatars.attach(params[:avatars])
        pp new_profpic
        if new_profpic.save
            render json: new_profpic, status: :ok
            pp new_profpic.avatars
        else
            pp new_profpic.errors.full_messages
        end
    end

    private 

    def avatar_params
        params.permit(:avatar_url, :user_id, avatars:[])
        # params.require(:item).permit(:itemname, :price, :description, :color, :size, :condition, :user_id, images: [])
    end

    def photo_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
