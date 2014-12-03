ForeverStyleGuide::Engine.routes.draw do
    mount StyleGuide::Engine => "/" unless Rails.env.production?
end
