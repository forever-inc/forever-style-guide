$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "forever_style_guide/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "forever_style_guide"
  s.version     = ForeverStyleGuide::VERSION
  s.authors     = ["Nicholas McClay"]
  s.email       = ["nmcclay@forever.com"]
  s.homepage    = "https://github.com/forever-inc/forever-style-guide"
  s.summary     = "A live style guide and component API for the Forever brand"
  s.description = "Install this as a gem in your Forever app and it will expose style guide through /style-guide route"
  s.license     = "MIT"

  s.files = Dir[
    "{config,db,lib}/**/*",
    "{app/assets/fonts}/**/*",
    "{app/assets/images/forever_style_guide}/**/*",
    "{app/assets/javascripts/forever_style_guide}/**/*",
    "{app/assets/stylesheets/forever_style_guide}/**/*",
    "{app/helpers/forever_style_guide}/**/*"
    ]

  s.add_dependency "rails", '5.2.3'
  s.add_dependency "style-guide"

  s.add_dependency "sass-rails"
  s.add_dependency "jquery-rails"
  s.add_dependency "bootstrap-sass"
  s.add_dependency "font-awesome-rails"

  s.add_development_dependency "sqlite3"
  s.add_development_dependency "guard-rails"
  s.add_development_dependency "guard-livereload"
  s.add_development_dependency "thor"
end
