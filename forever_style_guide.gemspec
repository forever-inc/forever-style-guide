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
    "lib/**/*",
    "{app/assets/fonts}/**/*",
    "{app/assets/images/forever_style_guide}/**/*",
    "{app/assets/javascripts/forever_style_guide}/**/*",
    "{app/assets/stylesheets/forever_style_guide}/**/*",
    "{app/helpers/forever_style_guide}/**/*"
  ]
end
