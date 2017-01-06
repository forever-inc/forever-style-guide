require 'pathname'

module ForeverStyleGuide
  module ApplicationHelper

    def trademark(copy)
      case copy
      when "Forever", "Forever Storage", "Forever Historian", "Forever Valet", "pixels2Pages", "Historian", "Forever Live!"
        copy += "™"
      when "Forever Account", "Forever Guarantee", "Forever Guarantee Fund", "Forever Membership", "Forever Guarantee Fund", "Forever Members", "Forever Retreats", "Forever Ambassador", "Forever Ambassadors"
        copy[0..6] + "™" + copy[7..copy.length-1]
      when "Forever Artisan", "Artisan"
        copy += "®"
      else
        copy
      end
    end

    #Path helpers for mounted style guide use
    def www_url(path = '/', url = nil)
      strip_subdomain("www", path, url)
    end

    def web_app_url(path = '/', url = nil)
      strip_subdomain("my", path, url)
    end

    def strip_subdomain(sub, path = '/', url = nil)
      url ||= request.url if respond_to?(:request)
      url = URI(url)
      replace = url.to_s
      protocols = ['www.', 'store.', 'my.']
      replace = protocols.find { |protocol| replace.include?(protocol) }

      #protect against a nil return that would break localhost
      if replace.blank?
        replace = '/'
      end

      url.host = url.host.sub(replace, "#{sub}.")

      # Allow ember routes like /#/settings/password
      url.path = URI.escape(path, '#, ?')
      url.query = nil
      url = URI.decode(url.to_s)
    end

    def absolute_url(url_str)
      return  unless url_str.present?

      url_str = url_str.strip

      return url_str if url_str =~ /https?\:/i

      "http://" + url_str
    end

    def has_item_in_cart?
      defined?(current_order) && current_order.product_count > 0
    end

    def has_ambassador?
      defined?(current_ambassador) && current_ambassador.present?
    end

    #active state nav
    def is_active?
      return true if @pages.any?{ |matches| [controller.controller_name, controller.action_name].include? matches }
    end

    def is_in_product_dropdown?
      @pages = [
        'guaranteed_storage', 'add_storage', 'services', 'historian', 'downloads', 'valet',
        'artisan', 'digital_art', 'digital_art_library', 'p2p',
        'print',
        'gifts', 'shipping', 'bulk_orders', 'returns',
        'products'
      ]
      is_active?
    end

    def is_in_my_forever_dropdown?
      @pages = ['guarantee', 'about', 'team', 'beliefs']
      is_active?
    end

    def is_in_community_dropdown?
      @pages = ['opportunity', 'find_ambassadors', 'commitments', 'retreats']
      is_active?
    end

    def is_in_deals_dropdown?
      @pages = ['promotions', 'deals']
      is_active?
    end

    #User storage methds as seen in web app user.rb
    def capacity_readable
      if current_user
        number_to_human_size(current_user.storage_capacity)
      end
    end

    def storage_ratio_percent
      number_to_percentage(storage_ratio * 100, precision: 0)
    end

    def storage_ratio
      return 0 if current_user.storage_capacity == 0
      current_user.storage_used.to_f / current_user.storage_capacity.to_f
    end

    # Admin Links
    def store_admin_url
      www_url('/admin')
    end

    def web_app_admin_url
      web_app_url('/admin')
    end

    def stop_impersonating_url
      web_app_url('/admin/users')
    end

    # Web App Paths
    def library_url
      web_app_url('/#/inbox')
    end

    def inbox_url
      web_app_url('/#/inbox?inbox_filter_type=unorganized-items')
    end

    def projects_url
      web_app_url('/#/projects')
    end

    def people_url
      web_app_url('/#/people/family')
    end

    def app_home_url
      web_app_url('/#/')
    end

    # User settings links (store and web app)
    def user_settings_url
      web_app_url('/#/settings')
    end

    def user_order_history_url
      www_url('/settings/orders')
    end

    def user_downloads_url
      www_url('/settings/downloads')
    end

    def ambassador_settings_url
      www_url('/settings/my_ambassador')
    end

    # Combined Store/WWW Paths - now all available at www.forever.com
    def login_url
      www_url('/sign_in')
    end

    def log_out_url
      www_url('/log_out')
    end

    def sign_up_url
      www_url('/sign_up')
    end

    def marketing_home_url
      www_url('/')
    end

    def about_url
      www_url('/about')
    end

    def team_url
      www_url('/about/team')
    end

    def beliefs_url
      www_url('/about/beliefs')
    end

    def guarantee_url
      www_url('/guarantee')
    end

    def storage_url
      www_url('/forever_storage')
    end

    def app_url
      www_url('/app')
    end

    def valet_url
      www_url('/valet')
    end

    def historian_url
      www_url('/historian')
    end

    def artisan_url
      www_url('/artisan')
    end

    def projects_marketing_url
      www_url('/projects')
    end

    def deals_url
      www_url('/deals')
    end

    def shipping_info_url
      www_url('/shipping')
    end

    def bulk_orders_url
      www_url('/bulk-orders')
    end

    def return_policy_url
      www_url('/returns')
    end

    def p2p_url
      www_url('/pixels2pages')
    end

    def customer_commitments_url
      www_url('/commitments')
    end

    def opportunity_url
      www_url('/opportunity')
    end

    def retreats_url
      www_url('/retreats')
    end

    def press_url
      www_url('/about/press')
    end

    def cart_url
      www_url('/cart')
    end

    def services_url
      www_url('/services')
    end

    def digital_art_url
      www_url('/digital_art')
    end

    def new_digital_art_url
      www_url('/digital_art_library?facet_name=new')
    end

    def free_digital_art_url
      www_url('/digital_art_library?facet_name=free')
    end

    def all_digital_art_url
      www_url('/digital_art_library')
    end

    def print_url
      www_url('/print')
    end

    def photo_books_url
      www_url('/photobooks')
    end

    def cards_url
      www_url('/cards')
    end

    def calendars_url
      www_url('/calendars')
    end

    def wall_art_url
      www_url('/wall_art')
    end

    def photo_gifts_url
      www_url('/photo_gifts')
    end

    def page_prints_url
      www_url('/page_prints')
    end

    def gift_certificate_url
      www_url('/gift_certificates')
    end

    def gift_certificate_url
      www_url('/gift_certificates')
    end

    def gifts_url
      www_url('/gifts')
    end

    def find_ambassador_url
      www_url('/find_ambassador')
    end

    def ambassador_direct_url
      www_url('/ambassador-direct')
    end

    def upgrade_url
      if defined?(current_user) && current_user.membership
        www_url('/add_storage')
      else
        www_url('/pricing')
      end
    end

    def back_office_url
      www_url('/back_office')
    end

    def tos_url
      www_url('/tos')
    end

    def privacy_url
      www_url('/privacy')
    end

    # External Paths
    def forever_live_url
      "http://www.foreverlive2016.com"
    end

    def facebook_url
      "https://www.facebook.com/Forever"
    end

    def twitter_url
      "https://www.twitter.com/forever"
    end

    def instagram_url
      "https://www.instagram.com/forever_inc/"
    end

    def youtube_url
      "https://www.youtube.com/channel/UCfBFL_W3FYW7W0wAr4EEGnA"
    end

    def pinterest_url
      "https://www.pinterest.com/FOREVER/"
    end

    def blog_url
      "https://blog.forever.com/"
    end

    def ios_url
      "https://itunes.apple.com/us/app/forever/id808235823?ls=1&mt=8"
    end

    def android_url
      "https://play.google.com/store/apps/details?id=com.forever.forever"
    end

    def careers_url
      "http://forever.theresumator.com/apply"
    end

    def help_center_url
      "https://forever1.zendesk.com/hc/en-us"
    end

    def contact_us_url
      "https://forever1.zendesk.com/hc/en-us/requests/new"
    end

    def web_faq_url
      "https://forever1.zendesk.com/hc/en-us/categories/200175058-Forever-Web-Mobile-Apps"
    end

    def artisan_faq_url
      "https://forever1.zendesk.com/hc/en-us/sections/200632048-Artisan-software"
    end

    def historian_faq_url
      "https://forever1.zendesk.com/hc/en-us/sections/200520187-Historian"
    end

    def zendesk_overview_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/204874607"
    end

    def zendesk_uploading_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/204496797"
    end

    def zendesk_organizing_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/222868828-Organizing-your-Forever-Inbox-Video-"
    end

    def zendesk_sharing_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/203834518-Using-the-People-Tab-Video-"
    end

    def zendesk_inbox_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/223580988-Deeper-Dive-into-How-to-Use-your-Inbox-Video-"
    end

    def zendesk_albums_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/226085547-Creating-an-Album-Uploading-Directly-to-an-Album-Video-"
    end

    def zendesk_nested_albums_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/218144057"
    end

    def zendesk_tags_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/223595308-Using-Albums-and-Tags-Video-"
    end

    # Path helpers for style guide dummy app
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
  end
end
