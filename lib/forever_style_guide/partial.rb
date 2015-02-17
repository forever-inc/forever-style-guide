require "style_guide/partial"

module ForeverStyleGuide
  class Partial < StyleGuide::Partial

    def raw_html?
      @raw_html ||= extension.include? "html"
    end

    def extension
      @extension ||= path[/\.(.*)/]
    end

    def title
      @title ||= File.basename(path, extension).titleize.strip
    end

    def render
      @render ||= app_view.render(file: path)
    end

    def app_view
      ApplicationController.new.view_context
    end

  end
end
