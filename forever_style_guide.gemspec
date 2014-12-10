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

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.1"
  s.add_dependency "style-guide"
  s.add_dependency "sass"

  s.add_development_dependency "sqlite3"
end
