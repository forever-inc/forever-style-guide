require 'test_helper'

module ForeverStyleGuide
  class ForeverStyleGuide::PagesControllerTest < ActionController::TestCase
    test "should get personas" do
      get :personas
      assert_response :success
    end

  end
end
