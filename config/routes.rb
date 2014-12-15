ForeverStyleGuide::Engine.routes.draw do
    get "/personas", to: "pages#personas"
    get "/voice_and_tone", to: "pages#voice_and_tone"
    mount StyleGuide::Engine => "/", :as => :style unless Rails.env.production?
    root to: "style#show"
end
