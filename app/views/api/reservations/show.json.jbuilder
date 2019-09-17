json.extract! @reservation, :id, :user_id, :kitchen_id, :timeslot_id, :date, :party_size, :state, :optional_request
json.kitchenName @kitchen_name
json.time @time
