require 'pry'

class BuildingsController < ApplicationController
  def index
    buildings = Building.all
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
    building = Building.find_by(id: params[:id])
    render json: building
  end

  private

  def building_params
    params.permit(:address, :description, :numberOfApartments)
  end
end
