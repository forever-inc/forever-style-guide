require 'pathname'

module ForeverStyleGuide
  module ApplicationHelper

    def style_guide_path
      Rails.application.routes.named_routes[:forever_style_guide].path.spec.to_s
    end

    def style_guide_root
      ForeverStyleGuide::Engine.root
    end

    def style_guide_version
      ForeverStyleGuide::VERSION
    end

    def sections_path
      Pathname.new(Config.sections_path)
    end

    def demo_link(demo_name)
      File.join(style_guide_path, "demo", demo_name)
    end

    def escape_for_display(content)
      content.gsub(/\</, "&lt;").gsub(/\>/, "&gt;").html_safe
    end

    def escape_erb_for_display(partial_path)
      partial = File.read("#{style_guide_root}/app/views/#{partial_path}")
      escape_for_display(partial)
    end

  end
end
