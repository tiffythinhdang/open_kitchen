Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :kitchens, only: [:index, :show]
    
    resources :cuisines, only: [:index]
    resources :locations, only: [:index]
    resources :reservations, only: [:index, :show, :create, :update]
  end

  root "staticpages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
