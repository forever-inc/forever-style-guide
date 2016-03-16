require "style-guide"
require "forever_style_guide/version"
require "forever_style_guide/config"
require "forever_style_guide/section"
require "forever_style_guide/partial"

require 'sass-rails'
require 'jquery-rails'
require 'bootstrap-sass'
require 'font-awesome-rails'

module ForeverStyleGuide
  class Engine < ::Rails::Engine
    isolate_namespace ForeverStyleGuide
    engine_name 'forever_style_guide'
    config.style_guide = ForeverStyleGuide::Config.new
  end
end
