require 'test_helper'

class Api::TimeslotsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_timeslots_index_url
    assert_response :success
  end

end
