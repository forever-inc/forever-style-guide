require "style_guide/config"

module ForeverStyleGuide
  class Config < StyleGuide::Config

    def style_guide_decorators
      @style_guide_decorators ||= YAML.load(File.open(ForeverStyleGuide::Engine.root.join("config","style_guide.yml"), 'r'))['style_guide']
    end

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
