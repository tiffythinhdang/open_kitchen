require 'test_helper'

class Api::CuisinesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cuisines_index_url
    assert_response :success
  end

end
