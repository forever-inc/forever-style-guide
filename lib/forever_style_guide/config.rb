require "style_guide/config"

module ForeverStyleGuide
  class Config < StyleGuide::Config

    def self.sections_path
      File.join("forever_style_guide", "sections")
    end

    def self.bootstrap_glob
      ForeverStyleGuide::Engine.root.join("app", "views", sections_path, "*")
    end

    def sections
      ForeverStyleGuide::Section.from_paths(expanded_paths)
    end

  end
end
