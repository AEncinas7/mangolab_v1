require 'test_helper'

class VerticalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get verticals_index_url
    assert_response :success
  end

end
