class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session_token[:session_token])
  end

  def log_in(user)
    user.reset_session_token! = session_token[:session_token]
    @current_user = user
  end

  def log_out
    current_user.reset_session_token!
    session_token[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def ensure_log_in
    unless logged_in?
      render json: { base: ["Invalid Credentials"] }, status: 401
    end
  end
end
