require 'pathname'

module ForeverStyleGuide
  module ApplicationHelper

    def style_guide_version
      VERSION
    end

    def sections_path
      Pathname.new(Config.sections_path)
    end

    def escape_for_display(content)
      content.gsub(/\</, "&lt;").gsub(/\>/, "&gt;").html_safe
    end
  end
end
