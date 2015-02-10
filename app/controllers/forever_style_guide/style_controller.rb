module ForeverStyleGuide
  class StyleController < StyleGuide::StyleController
    layout "forever_style_guide/application"

    def index
      render "forever_style_guide/index"
    end

    def show
      @current_section = @sections.detect { |section| section.id == params[:id] }
    end

    # def ux_guide
    #   @sections = StyleGuide::Engine.config.style_guide.sections
    #   @current_section = @sections.detect { |section| section.title == "Ux Guide" }
    #   render "forever_style_guide/ux_guide/show"
    # end
    #
    # def voice_and_tone
    #   @sections = StyleGuide::Engine.config.style_guide.sections
    #   @current_section = @sections.detect { |section| section.title == "Voice And Tone" }
    #   render "forever_style_guide/voice_and_tone/show"
    # end
  end
end
