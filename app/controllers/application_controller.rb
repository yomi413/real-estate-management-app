require "application_responder"

class ApplicationController < ActionController::API
  self.responder = ApplicationResponder
  respond_to :json

  # protect_from_forgery with: :exception
  # helper_method :logged_in?, :current_user

  def verified_user
    redirect_to '/' unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def current_user
    User.find_by(id:session[:user_id])
  end

end
