require "forever_style_guide/version"

module ForeverStyleGuide
  def self.asset_path
    File.expand_path("../app/assets", __FILE__)
  end
end
