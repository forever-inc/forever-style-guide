module ForeverStyleGuide
  class StyleController < ForeverStyleGuide::ApplicationController
    before_filter :load_sections
    
    def show
      @current_section = @sections.detect { |section| section.id == params[:id] }
    end

  end
end
