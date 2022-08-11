Rails.application.routes.draw do
  resources :favorites
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # scope '/checkout' do
    #   post 'create', to: 'checkout#create', as: 'checkout_create'
    #   get 'cancel', to: 'checkout#cancel', as: 'checkout_cancel'
    #   get 'success', to: 'checkout#success', as: 'checkout_success'
    # end
  # namespace :api do
    resources :items 
    resources :users 
    resources :user_cart_items, only: [:destroy, :emptycart]
    resources :user_carts, only: [:index, :show, :create]
    # resources :admin_access_only, only: [:update, :destroy]

    post '/payment', to: "checkout#create"
    post "/signup", to: "users#create"
    # patch "/profile/:id", to: "users#update"
    get "/me", to: "users#show" 
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    post "/sell", to: "items#create"
    get "/mycart", to: "user_carts#show"
    # delete "/removeitem", to: "user_cart_items#destroy"
    post "/create_cart" , to: "user_carts#create"
    post "/addtocart", to: "user_cart_items#create"
    delete "/emptycart", to: "user_cart_items#emptycart"
    post '/create-payment-intent', to: 'checkout#create_payment_intent'
  # end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
