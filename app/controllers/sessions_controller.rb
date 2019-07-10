require 'bcrypt'
require 'pry'

class SessionsController < ApplicationController
  def new
    user = User.new
  end

  def create
    session = Session.create(uid: SecureRandom.uuid)
    user = User.find_or_create_by(user_params)

    user.sessions = [session]

    render json: {sessionUid: session.uid}, status: 201
  end

  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session = Session.create(uid: SecureRandom.uuid)
      user.sessions = [session]
      render json: {sessionUid: session.uid}, status: 201
    else
      render json: {errors: "Email and/or password not valid. Please try again or create a new account."}, status: 422
    end
  end

  def destroy
    session = Session.find_by(uid: params[:uid])
    session.delete()
    render json: {success: true}, status: 200
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
