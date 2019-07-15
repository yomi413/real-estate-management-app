require 'securerandom'

class User < ApplicationRecord
  has_many :buildings
  has_many :sessions
  has_many :documents

  has_secure_password(validations: false)

  validates :email, presence: true
  validates :password, presence: true

  # accepts_nested_attributes_for :building 
  def current_user
    self.find_by(id: session[:user_id])
  end
end
