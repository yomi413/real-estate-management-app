Rails.application.routes.draw do
  resources :buildings do 
    resources :documents
  end
  resources :users

  get '/session', to: 'sessions#new'

  post '/session', to: 'sessions#login', as: 'login'
  
  delete '/session', to: 'sessions#destroy', as: 'logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
