ForeverStyleGuide::Engine.routes.draw do
  root to: "style#index", as: :forever_style_guide
  get "/:id" => "style#show", :as => :style
end
