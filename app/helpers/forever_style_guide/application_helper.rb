require 'pathname'

module ForeverStyleGuide
  module ApplicationHelper

    #Path helpers for style guide dummy app
    def style_guide_path
      Rails.application.routes.named_routes[:forever_style_guide].path.spec.to_s
    end

    def style_guide_root
      ForeverStyleGuide::Engine.root
    end

    def style_guide_version
      ForeverStyleGuide::VERSION
    end

    def sections_path
      Pathname.new(Config.sections_path)
    end

    def demo_link(demo_name)
      File.join(style_guide_path, "demo", demo_name)
    end

    def escape_for_display(content)
      content.gsub(/\</, "&lt;").gsub(/\>/, "&gt;").html_safe
    end

    def escape_erb_for_display(partial_path)
      partial = File.read("#{style_guide_root}/app/views/#{partial_path}")
      escape_for_display(partial)
    end

    #Path helpers for mounted style guide use
    def www_url(path = '/', url = nil)
      strip_subdomain("www", path, url)
    end

    def web_app_url(path = '/', url = nil)
      strip_subdomain("my", path, url)
    end

    def store_url(path = '/', url = nil)
      strip_subdomain("store", path, url)
    end

    def strip_subdomain(sub, path = '/', url = nil)
      url ||= request.url if respond_to?(:request)
      url = URI(url)
      replace = url.to_s
      protocols = ['www.', 'store.', 'my.']
      replace = protocols.find { |protocol| replace.include?(protocol) }
      url.host = url.host.sub(replace, "#{sub}.")
      url.path = path
      url.query = nil
      url.to_s
    end

    #Web App Paths
    def login_path
      web_app_url('/login')
    end

    def sign_up_path
      web_app_url('/signup')
    end

    def library_path
      web_app_url('/inbox')
    end

    def projects_path
      web_app_url('/projects')
    end

    def people_path
      web_app_url('/people/family')
    end

    def app_home_path
      web_app_url('/')
    end

    #Marketing Site Paths
    def about_path
      www_url('/about')
    end

    def team_path
      www_url('/about/team')
    end

    def beliefs_path
      www_url('/about/beliefs')
    end

    def guarantee_path
      www_url('/guarantee')
    end

    # External Paths
    # TODO get updated videos on Zendesk
    def zendesk_overview_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/204874607"
    end

    def zendesk_uploading_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/204496797"
    end

    def zendesk_organizing_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/203811218"
    end

    def zendesk_sharing_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/203935338"
    end

    def zendesk_tour_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/203913608"
    end

    def zendesk_albums_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/218144057"
    end

    def zendesk_tags_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/203834548"
    end

    def zendesk_dates_video_path
      "https://forever1.zendesk.com/hc/en-us/articles/206462457"
    end
  end
end
