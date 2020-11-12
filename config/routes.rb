Rails.application.routes.draw do

  # get 'errors/not_found'
  match '/404', to: 'errors#not_found', via: :all
  root to: 'home#index'
  
  resources :home, only: [:index]
  resources :services, only: [:index]
  resources :process, only: [:index]
  resources :industries, only: [:index]
  resources :webinars, only: [:index]
  

end
