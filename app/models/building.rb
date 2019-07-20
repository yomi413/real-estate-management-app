class Building < ApplicationRecord
  belongs_to :user
  has_one :document

  validates :address, presence: true
  validates :description, presence: true
  # validates :image, presence: true
  validates :numberOfApartments, presence: true

  accepts_nested_attributes_for :document
end
