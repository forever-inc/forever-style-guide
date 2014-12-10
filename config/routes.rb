ForeverStyleGuide::Engine.routes.draw do
    get "/personas", to: "pages#personas"
    mount StyleGuide::Engine => "/", :as => :style unless Rails.env.production?
end
