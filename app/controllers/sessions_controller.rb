require 'bcrypt'

class SessionsController < ApplicationController
  def new
    user = User.new
  end

  def create
    @user = User.find_or_create_by(uid: auth['uid']) do |user|
      user.name = auth['info']['name']
      user.email = auth['info']['email']
      user.image = auth['info']['image']
    end

    session[:user_id] = @user.id

    render 'welcome/home'
  end

  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash.now[:error] = "Email and/or password not valid. Please try again."
      render 'new'
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path
  end
end
