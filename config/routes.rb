Rails.application.routes.draw do
  resources :user_likes_containers
  resources :saved_items
  resources :favorite_items
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
    resources :user_cart_items, only: [:destroy, :create, :emptycart]
    resources :user_carts, only: [:index, :show, :create]
    resources :user_likes_container, only: [:show, :create]
    resources :saved_items, only: [:destroy, :create, :removelike]
    # resources :admin_access_only, only: [:update, :destroy]

    post '/payment', to: "checkout#create"
    post "/signup", to: "users#create"
    # delete "/favorites:user_id", to: "users#destroy"
    # patch "/profile/:id", to: "users#update"
    get "/me", to: "users#show"
    patch "/profile/:id", to: "users#update"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    post "/sell", to: "items#create"
    get "/mycart", to: "user_carts#show"  
    # delete "/removeitem", to: "user_cart_items#destroy"
    # post "/create_cart" , to: "user_carts#create"
    post "/addtocart", to: "user_cart_items#create"
    delete "/emptycart", to: "user_cart_items#emptycart"
    post '/create-payment-intent', to: 'checkout#create_payment_intent'
    get "/mylikes", to: "user_likes_containers#show"
    post "/save" , to: "saved_items#create"
    delete "/removelike", to: "saved_items#destroy"
    # post "/create_container", to: "user_likes_container#create"

  # end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
