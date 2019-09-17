require 'test_helper'

class Api::LocationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_locations_index_url
    assert_response :success
  end

end
