require "forever_style_guide/version"

require 'sass-rails'
require 'jquery-rails'
require 'bootstrap-sass'
require 'font-awesome-rails'

module ForeverStyleGuide
  class Engine < ::Rails::Engine
    isolate_namespace ForeverStyleGuide
    engine_name 'forever_style_guide'

  end
end
