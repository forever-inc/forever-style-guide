require 'pathname'

module ForeverStyleGuide
  module ApplicationHelper

    def trademark(copy)
      case copy
      when "Forever"
        copy.upcase + "®"
      when "pixels2Pages", "Historian", "ClickCollage", "It's like insurance for your photos", "Paper Tray Studio", "p2P", "StoryBook Legacy", "Templates & Co", "Valet"
        copy + "™"
      when "Forever Account", "Forever Guarantee", "Forever Guarantee Fund", "Forever Membership", "Forever Retreats",
           "Forever Retreat", "Forever Ambassador", "Forever Ambassadors", "Forever Deal of the Day", "Forever App", "Forever Digital Art",
           "Forever Digital Art Store", "Forever Founder's Club", "Forever Gift Certificate", "Forever Gift Certificates", "Forever Intro Account", "Forever Library",
           "Forever Media Conversion", "Forever Mobile", "Forever Owner", "Forever Vault", "Forever Print Shop", "Forever Services",
           "Forever Software", "Forever Store", "Forever Premium Video Plan", "Forever Club", "Forever Print", "Forever Design & Print", "Forever Historian", "Forever Valet", "Forever Live!"
        copy[0..6].upcase + "®" + copy[7..copy.length-1]
      when "Forever Artisan", "Forever Storage"
        copy[0..6].upcase + copy[7..copy.length-1] + "®"
      when "Artisan", "Panstoria"
        copy + "®"
      else
        copy
      end
    end

    #Path helpers for mounted style guide use
    def www_url(path = '/', url = nil)
      strip_subdomain("www", path, url)
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
    def is_active?(page_name, product_types = nil)
      controller.controller_name.include?(page_name) || controller.action_name.include?(page_name) || (@product != nil && product_types !=nil && product_types.split(',').include?(@product.product_type) && !@product.name.include?('Historian'))
    end

    #User storage methds as seen in web app user.rb
    def capacity_readable
      if current_user
        number_to_human_size(current_user.storage_capacity, precision: 4)
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

    def stop_impersonating_url
      ('/impersonations')
    end

    # Web App Paths
    def library_url
      ('/app/library')
    end

    def albums_url
      ('/app/albums')
    end

    def tags_url
      ('/app/tags')
    end

    def projects_url
      ('/app/projects')
    end

    def people_url
      ('/app/users')
    end

    def profile_url
      ('/app/profile')
    end

    def user_settings_url
      ('/app/settings')
    end

    # Combined Store/WWW Paths - now all available at www.forever.com
    def user_order_history_url
      www_url('/settings/orders')
    end

    def user_downloads_url
      www_url('/settings/downloads')
    end

    def ambassador_settings_url
      www_url('/settings/my_ambassador')
    end

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

    def mobile_url
      www_url('/mobile')
    end

    def historian_url
      www_url('/historian')
    end

    def artisan_url
      www_url('/artisan')
    end

    def forever_print_url
      www_url('/forever_print')
    end

    def print_quality_url
      www_url('/print_quality')
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

    def forever_print_library_url
      www_url('/forever_print_library')
    end

    def featured_photo_books_library_url
      www_url('/forever_print_library?facet_name=featured')
    end

    def artisan_print_url
      www_url('/artisan#printing')
    end

    def free_digital_art_url
      www_url('/digital_art_library?facet_name=free')
    end

    def predesigned_layouts_digital_art_url
      www_url('/digital_art_library?facet_name=pre-designed%20layouts')
    end

    def all_digital_art_url
      www_url('/digital_art_library')
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
      "https://forever1.zendesk.com/hc/en-us/articles/115000519251-Tutorial-Video-How-to-Upload"
    end

    def zendesk_sharing_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/115000519131-Tutorial-Video-How-to-Share-with-Friends-and-Family"
    end

    def zendesk_albums_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/115000519171-Tutorial-Video-Organizing-with-Albums"
    end

    def zendesk_tags_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/115000519211-Tutorial-Video-Tagging-in-Forever-"
    end

    def zendesk_projects_video_url
      "https://forever1.zendesk.com/hc/en-us/articles/115002526452-Video-Tutorial-FOREVER-Print"
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
