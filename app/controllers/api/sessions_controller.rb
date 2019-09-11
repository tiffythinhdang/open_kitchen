class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render "api/users/show"
    else
      @errors = ["Invalid email or password"]
      render json: @errors, status: 401
    end
    
  end

  def destroy
    @user = current_user

    if @user
      log_out!
      render "api/users/show"
    else
      @errors = ["Nobody signed in"]
      render json: @errors, status: 404
    end
  end
end
