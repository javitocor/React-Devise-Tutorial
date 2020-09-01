Rails.application.routes.draw do
  devise_for :users
  get 'welcome/home'
  get 'welcome/app'
  get '/app', to: 'welcome#app', as: 'app'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#home'
  namespace :api do 
    namespace :v1 do 
      resources :posts
    end 
  end
end