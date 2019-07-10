class Building < ApplicationRecord
  belongs_to :user

  validates :address, presence: true
  validates :description, presence: true
  validates :numberOfApartments, presence: true
end
