ForeverStyleGuide::Engine.routes.draw do
    get "/personas", to: "pages#personas"
    mount StyleGuide::Engine => "/" unless Rails.env.production?
end
