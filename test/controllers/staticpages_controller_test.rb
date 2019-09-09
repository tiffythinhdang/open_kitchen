require 'test_helper'

class StaticpagesControllerTest < ActionDispatch::IntegrationTest
  test "should get root" do
    get staticpages_root_url
    assert_response :success
  end

end
