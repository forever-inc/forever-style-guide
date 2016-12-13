namespace :assets do
  desc 'compile css from project-specific manifest, plus fonts, and images'
  task :compile_mars_manifest do

    # identify distribution folder, empty it if it exists
    dist = "#{ForeverStyleGuide::Engine.root}/dist"

    if File.exists?(dist)
      FileUtils.remove_dir "#{dist}", true
    end

    FileUtils.mkdir_p("#{dist}")

    # provide a copy of the fonts assets to the dist file
    fonts = "#{ForeverStyleGuide::Engine.root}/app/assets/fonts"
    FileUtils.cp_r fonts, dist
    puts "fonts copied from forever_style_guide to dist/fonts"

    # provide a copy of the image assets to the dist file
    images = "#{ForeverStyleGuide::Engine.root}/app/assets/images/forever_style_guide"
    FileUtils.cp_r images, dist
    File.rename("#{dist}/forever_style_guide", "#{dist}/images" )
    puts "images copied from forever_style_guide to dist/images"

    # compile css from scss manifest file
    manifest  = "#{ForeverStyleGuide::Engine.root}/app/assets/stylesheets/forever_style_guide/_mars_manifest.scss"
    FileUtils.mkdir_p("#{dist}/stylesheets")
    `sass "#{manifest}" "#{dist}/stylesheets/forever-style-guide.css"`
    puts "css compiled from manifest to dist/css"

    puts "task complete"
  end
end
