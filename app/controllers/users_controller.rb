require 'pry'

class UsersController < ApplicationController
  def index
    users = User.all
  end

  def create
    session = Session.new(uid: SecureRandom.uuid)
    user = User.new(user_params)

    if user.save && !user.email.empty? && !user.password.empty?
      session.save
      user.sessions = [session]
      render json: {sessionUid: session.uid}, status: 201
    else
      render json: {errors: "Please fill in the blanks."}, status: 422
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  private

  def user_params
    params.permit(:email, :password, :first_name, :last_name)
  end
end
