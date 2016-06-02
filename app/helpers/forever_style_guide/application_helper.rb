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

    def storage_path
      www_url('/guaranteed_storage')
    end

    def app_path
      www_url('/app')
    end

    def valet_path
      www_url('/valet')
    end

    def historian_path
      www_url('/historian')
    end

    def artisan_path
      www_url('/artisan')
    end

    def projects_marketing_path
      www_url('/projects')
    end

    def promotions_path
      www_url('/holidays')
    end

    def shipping_info_path
      www_url('/shipping')
    end

    def bulk_orders_path
      www_url('/bulk-orders')
    end

    def return_policy_path
      www_url('/returns')
    end

    def p2p_path
      www_url('/pixels2pages')
    end

    #Store Paths
    def services_path
      store_url('/services')
    end

    def digital_art_path
      store_url('/digital_art')
    end

    def new_digital_art_path
      store_url('/new_digital_art')
    end

    def sale_digital_art_path
      store_url('/sale_digital_art')
    end

    def all_digital_art_path
      store_url('/all_digital_art')
    end

    def print_path
      store_url('/print')
    end

    def photo_books_path
      store_url('/photobooks')
    end

    def cards_path
      store_url('/cards')
    end

    def calendars_path
      store_url('/calendars')
    end

    def wall_art_path
      store_url('/wall_art')
    end

    def photo_gifts_path
      store_url('/photo_gifts')
    end

    def page_prints_path
      store_url('/page_prints')
    end

    def gift_certificate_path
      store_url('/gift_certificates')
    end

    def gift_certificate_path
      store_url('/gift_certificates')
    end

    def gifts_path
      store_url('/gifts')
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
