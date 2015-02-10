require "style_guide/section"
require "forever_style_guide/partial"

module ForeverStyleGuide
  class Section < StyleGuide::Section

    def partials
      partial_paths.map { |path| ForeverStyleGuide::Partial.new(path, self) }.sort_by { |p| p.title }
    end

  end
end
