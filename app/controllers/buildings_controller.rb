require 'pry'

class BuildingsController < ApplicationController
  def index
    buildings = Building.all
    render json: {buildings: buildings}
  end

  def create
    building = Building.new(building_params)

    if building.save && !building.address.empty? && !building.description.empty? && !building.numberOfApartments.empty?
      render json: {success: true}, status: 200
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
