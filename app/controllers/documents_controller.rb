require 'pry'

class DocumentsController < ApplicationController
    def index
        building = Building.find_by(id: params[:building_id])
        document = building.document
        render json: {document: document}
    end

    def create
        building = Building.find_by(id: params[:building_id])
        document = building.documents.create(document_params)

        render json: {document: document}
    end

    private

    def document_params
        params.permit(
            :deed, 
            :mortgage_1, 
            :mortgage_2, 
            :satisfaction_of_mortgage_1, 
            :satisfaction_of_mortgage_2, 
            :certificate_of_occupancy, 
            :building_id
        )
    end

end
