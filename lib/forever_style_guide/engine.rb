require "style-guide"
require "forever_style_guide/config"
require "forever_style_guide/section"

module ForeverStyleGuide
  class Engine < ::Rails::Engine
    isolate_namespace ForeverStyleGuide
    engine_name 'forever_style_guide'
    config.style_guide = ForeverStyleGuide::Config.new
  end
end
