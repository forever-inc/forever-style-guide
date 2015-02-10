module ForeverStyleGuide
  class ApplicationController < ActionController::Base
    helper FontAwesome::Rails::IconHelper

    def load_sections
      @sections = ForeverStyleGuide::Engine.config.style_guide.sections
    end

  end
end
