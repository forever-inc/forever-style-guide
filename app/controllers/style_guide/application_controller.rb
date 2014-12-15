module StyleGuide
  class ApplicationController < ActionController::Base

    layout "forever_style_guide/application"

    def load_sections
      @sections = StyleGuide::Engine.config.style_guide.sections
    end
  end
end
