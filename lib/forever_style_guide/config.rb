require "style_guide/config"

module ForeverStyleGuide
  class Config < StyleGuide::Config

    def self.bootstrap_glob
      ForeverStyleGuide::Engine.root.join("app", "views", "forever_style_guide", "*")
    end

    def sections
      ForeverStyleGuide::Section.from_paths(expanded_paths)
    end

  end
end
