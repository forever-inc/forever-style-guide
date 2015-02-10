require "style_guide/partial"

module ForeverStyleGuide
  class Partial < StyleGuide::Partial

    def render
      @render ||= app_view.render(:file => path)
    end

    def app_view
      ApplicationController.new.view_context
    end

  end
end
