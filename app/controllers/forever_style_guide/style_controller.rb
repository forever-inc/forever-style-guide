module ForeverStyleGuide
  class StyleController < ForeverStyleGuide::ApplicationController
    helper ApplicationHelper
    before_filter :load_sections
    
    def show
      @current_section = @sections.detect { |section| section.id == params[:id] }
    end

    def demo
      render :file => File.join("forever_style_guide", "demo", params[:path])
    end

  end
end
