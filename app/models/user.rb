class User < ApplicationRecord
  has_secure_password(validations: false)

  validates :email, presence: true
  validates :password, presence: true
end
