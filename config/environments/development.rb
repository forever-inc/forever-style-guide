Rails.application.configure do
  unless ENV['DISABLE_LIVERELOAD']
    # Inject livereload.js into the head
    config.middleware.insert_after(ActionDispatch::Static, Rack::LiveReload)
  end
end
