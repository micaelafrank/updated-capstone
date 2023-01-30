Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # scope '/checkout' do
    #   post 'create', to: 'checkout#create', as: 'checkout_create'
    #   get 'cancel', to: 'checkout#cancel', as: 'checkout_cancel'
    #   get 'success', to: 'checkout#success', as: 'checkout_success'
    # end
    # resources :checkout, only: [:create, :create_payment_intent]
  namespace :api do
    resources :items, only: [:index, :myItemsForSale, :show, :create, :update, :destroy]
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index, :update, :destroy] 
    resources :user_cart_items, only: [:index, :update, :show, :destroy, :create, :emptycart, :removefromcart]
    resources :user_carts, only: [:index, :show, :create, :get_count]
    resources :saved_items, only: [:show, :create, :destroy, :delete]
    resources :user_likes_container, only: [:index, :create]
    resources :user_likes_container, only: [:show] do
      resources :saved_items, only: [:index, :show]
    end

    # resources :admin_access_only, only: [:update, :destroy]

    post '/payment', to: "checkout#create"
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    patch "/items/edit/:item_id", to: "items#update"
    get "/myitemsforsale", to: "items#myitemsforsale"
    get "/cart-count/:user_id", to: "user_carts#get_count"
    # patch "/users/:id", to: "users#update"
    # delete "/favorites:user_id", to: "users#destroy"
    get "/profile/:username", to: "users#show"
    patch "/profile/:id", to: "users#update"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    patch "/profile/:id/add-image", to: "profiles#create"
    # post "/sell", to: "items#create"
    get "/mycart", to: "user_carts#show" 
    get "/rendercart", to: "user_cart_items#index" 
    get "/items", to: "items#index"
    get "/items/:itemname:id", to: "items#show"
    post "/items/add-images", to: "items#add-images"
    # post "/create_cart" , to: "user_carts#create"
    post "/addtocart", to: "user_cart_items#create"
    post "/save-item", to: "saved_items#create"
    delete "/removefromcart/:id", to: "user_cart_items#removefromcart"
    delete "/emptycart", to: "user_cart_items#emptycart"
    post "/create-payment-intent", to: "checkout#create_payment_intent"
    get "/user-likes-container/:user_id", to: "user_likes_containers#show"
    # get "/user_likes_container/:user_likes_container_id/saved_items", to: "saved_items#index"
    # get "/user_likes_container/:user_likes_container_id/saved_items/:id", to: "saved_items#show"
    patch "/edit_heart/:id", to: "items#heart_change"
    # post "/saved-items", to: "items#create"
    delete "/remove-save/:id", to: "saved_items#destroy" 
    patch "/edit_cart/:id", to: "items#cart_change"
    # post '/create-payment-intent', to: 'checkout#create_payment_intent'
    # delete "/saved_items/emptysaves", to: "saved_items#emptysaves"
  end
    # patch "items/heart_change/:id", to: "items#heart_change"
    # post "/create_container", to: "user_likes_container#create"
    post '/payment', to: "checkout#create"
    post '/create-payment-intent', to: 'checkout#create_payment_intent'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
