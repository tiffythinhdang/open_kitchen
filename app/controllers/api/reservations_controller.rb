class Api::ReservationsController < ApplicationController
  def index
    user = User.find_by(id: params[:id])
    @reservations = user.reservations
  end
  
  def create
    @reservation = Reservation.new(reservation_params)
    
    unless Reservation.is_possible?(@reservation)
      render json: ["Sorry this time is no longer available"], status: 422
      return
    end
 
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = Reservation.find_by(id: params[:id])
    @kitchen_name = Kitchen.find_by(id: @reservation.kitchen_id).name
    @time = Timeslot.find_by(id: @reservation.timeslot_id).time

    if @reservation
      render :show
    else
      render json: ["No reservation found"], status: 404
    end
  end

  def update
    @reservation = Reservation.find_by(id: params[:id])

    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(
      :user_id, 
      :kitchen_id, 
      :timeslot_id, 
      :date, 
      :party_size, 
      :state,
      :optional_request
    )
  end
end
