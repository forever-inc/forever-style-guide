ForeverStyleGuide::Engine.routes.draw do
  root to: "style#index"
  get "/ux_guide", to: "style#ux_guide"
  get "/voice_and_tone", to: "style#voice_and_tone"
  get "/:id" => "style#show", :as => :style
end
