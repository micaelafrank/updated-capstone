Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # scope '/checkout' do
    #   post 'create', to: 'checkout#create', as: 'checkout_create'
    #   get 'cancel', to: 'checkout#cancel', as: 'checkout_cancel'
    #   get 'success', to: 'checkout#success', as: 'checkout_success'
    # end

  namespace :api do
    resources :items, only: [:index, :show, :create, :update, :heart_change, :cart_change, :destroy]
    resources :users 
    resources :checkout, only: [:create, :create_payment_intent]
    resources :user_cart_items, only: [:destroy, :create, :emptycart]
    resources :user_carts, only: [:index, :show, :create]
    resources :user_likes_container, only: [:index, :show, :create]
    resources :saved_items, only: [:index, :show, :create, :destroy]
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
    post "/create-payment-intent", to: "checkout#create_payment_intent"
    get "/favorites", to: "user_likes_containers#mylikes"
    post "/save", to: "saved_items#create"
    get "/buy", to: "saved_items#index"
    delete "/unlike_item/:item_id", to: "saved_items#destroy"
    patch "/edit_heart/:id", to: "items#heart_change"
    patch "/edit_heart/:item_id", to: "saved_items#heart_change"
    patch "/edit_cart/:id", to: "items#cart_change"
  end
    # patch "items/heart_change/:id", to: "items#heart_change"
    # post "/create_container", to: "user_likes_container#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
