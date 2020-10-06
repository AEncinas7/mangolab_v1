Rails.application.routes.draw do

root to: 'home#index'

resources :home, only: [:index]
resources :services, only: [:index]
resources :process, only: [:index]
resources :verticals, only: [:index]

end
