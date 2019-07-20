require 'securerandom'

class User < ApplicationRecord
  has_many :buildings
  has_many :sessions
  has_many :documents

  has_secure_password(validations: false)

  validates :email, presence: true
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
