class Document < ApplicationRecord
    belongs_to :building

    # validates :deed, presence: true
    # validates :mortgage_1, presence: true
    # validates :mortgage_2, presence: true
    # validates :satisfaction_of_mortgage_1, presence: true
    # validates :satisfaction_of_mortgage_2, presence: true
    # validates :certificate_of_occupancy, presence: true
end
