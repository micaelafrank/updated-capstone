require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FinalProject
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # This is set in apps generated with the --api flag, and removes session/cookie middleware

    # ▾ Must add these lines! ▾
    # Adding back cookies and session middleware
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::Flash
  
    # Use SameSite=Strict for all cookies to help protect against CSRF
    # config.action_dispatch.cookies_same_site_protection = :strict
    config.api_only = true
  end
end
