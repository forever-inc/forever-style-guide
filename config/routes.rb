ForeverStyleGuide::Engine.routes.draw do
  get "/:id" => "style#show", :as => :style
  root to: "style#index"
end
