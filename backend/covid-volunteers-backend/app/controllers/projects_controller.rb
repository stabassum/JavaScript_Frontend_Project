class ProjectsController < ApplicationController

    def index
        projects = Project.all
        render json: projects
    end

    def show
        project = Project.find(params[:id])
        render json: project
    end

    def create
        project = Project.create(project_params)
        render json: project
    end

    # def update
    # end

    def destroy
        project = Project.find_by(id: params[:id])
        project.destroy
        render json: project
    end

    def project_params
        params.permit(:title, :description, :date, :location, :time, :volunteer_id)
    end

end