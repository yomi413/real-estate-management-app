require 'pry'

class BuildingsController < ApplicationController
  def index
    session = Session.find_by(uid: params[:uid])
    buildings = session.user.buildings.all

    render json: {buildings: buildings}
  end

  def new
    building = Building.new
  end

  def create
    session = Session.find_by(uid: params[:uid])
    building = session.user.buildings.new(building_params)

    if building.save
      render json: {success: true}, status: 201
    else
      render json: {errors: "Invalid building entry. Please try again."}, status: 422
    end
  end

  def show
    session = Session.find_by(uid: params[:uid])
    building = session.user.buildings.find_by(id: params[:id])
    render json: {building: building} 
  end

  private

  def building_params
    params.permit(
      :address, 
      :description, 
      :numberOfApartments, 
      document_attributes: [
        :deed, 
        :mortgage_1, 
        :mortgage_2, 
        :satisfaction_of_mortgage_1, 
        :satisfaction_of_mortgage_2, 
        :certificate_of_occupancy
      ])
  end
end
