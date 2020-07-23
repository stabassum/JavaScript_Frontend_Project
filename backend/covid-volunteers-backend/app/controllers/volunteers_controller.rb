class VolunteersController < ApplicationController
    def index
        @volunteers = Volunteer.all
        render json: @volunteers
    end

    def show
        @volunteer = Volunteer.find(params[:id])
        render json: @volunteer
    end

    def create
        @volunteer = Volunteer.create(volunteer_params)
        render json: @volunteer
    end

    # def update

    # end

    def destroy
        volunteer = Volunteer.find_by(id: params[:id])
        volunteer.destroy
        render json: volunteer
    end

    def volunteer_params
        params.permit(:name, :age, :contact, :skills)
    end

end
