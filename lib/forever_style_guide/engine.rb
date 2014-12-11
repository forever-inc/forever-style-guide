require "style-guide"

module ForeverStyleGuide
  class Engine < ::Rails::Engine
    isolate_namespace ForeverStyleGuide
    config.style_guide.paths << self.root.join("app/views/forever_style_guide/**/*")
    config.assets.debug = true
  end
end
