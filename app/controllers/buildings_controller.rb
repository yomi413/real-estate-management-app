require 'pry'

class BuildingsController < ApplicationController
  def index
    buildings = Building.all
  end

  # def new
  #   building = Building.new
  #
  #   render json: {success: true}, status: 200
  # end

  def create
    building = Building.create(building_params)
    binding.pry
    if building.save
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
    params.require(:building).permit(:address, :description, :numberOfApartments)
  end
end
