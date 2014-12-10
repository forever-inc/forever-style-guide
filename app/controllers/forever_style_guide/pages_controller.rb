module ForeverStyleGuide
  class PagesController < ForeverStyleGuide::ApplicationController
    def personas
      @sections = StyleGuide::Engine.config.style_guide.sections
      @current_section = @sections.detect { |section| section.title == "Personas" }
      render "forever_style_guide/personas/show"
    end
    def voice_and_tone
      @sections = StyleGuide::Engine.config.style_guide.sections
      @current_section = @sections.detect { |section| section.title == "Voice And Tone" }
      render "forever_style_guide/voice_and_tone/show"
    end
  end
end
