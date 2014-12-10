module ForeverStyleGuide
  class PagesController < ForeverStyleGuide::ApplicationController
    def personas
      @sections = StyleGuide::Engine.config.style_guide.sections
      @current_section = @sections.detect { |section| section.title == "Personas" }
      render "forever_style_guide/personas/show"
    end
  end
end
