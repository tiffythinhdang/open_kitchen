require 'test_helper'

class Api::KitchensControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_kitchens_index_url
    assert_response :success
  end

  test "should get show" do
    get api_kitchens_show_url
    assert_response :success
  end

end
