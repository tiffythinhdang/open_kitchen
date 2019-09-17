Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :kitchens, only: [:index, :show]
    
    resources :cuisines, only: [:index]
    resources :locations, only: [:index]
    resources :reservations, only: [:index, :create, :update]
    resources :reservations, only: [:show] do
      resources :timeslots, only: [:index]
      # get '/timeslots/kitchens/:id', to: 'timeslots#timeslots_by_kitchen'
    end

  end

  root "staticpages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
