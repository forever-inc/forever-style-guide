ForeverStyleGuide::Engine.routes.draw do
    root to: "style#show"
    get "/personas", to: "pages#personas"
    get "/voice_and_tone", to: "pages#voice_and_tone"
    mount StyleGuide::Engine => "/", :as => :style unless Rails.env.production?
end
