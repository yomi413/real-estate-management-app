class User < ApplicationRecord
  has_many :buildings

  has_secure_password(validations: false)

  validates :email, presence: true
  validates :password, presence: true
end
