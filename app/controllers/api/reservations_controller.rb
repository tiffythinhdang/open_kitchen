class Api::ReservationsController < ApplicationController
  def index
    user = User.find_by(id: params[:id])
    @reservations = user.reservations
  end
  
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save!
      render :show
    else
      render json: @errors.full_messages, status: 422
    end
  end

  def update
    @reservation = Reservation.find_by(id: params[:id])

    if @reservation.update(reservation_params)
      render :show
    else
      render json: @errors.full_messages, status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :timeslot_id, :date, :party_size, :state)
  end
end
