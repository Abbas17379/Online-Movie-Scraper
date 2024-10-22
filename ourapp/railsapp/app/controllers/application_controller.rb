#/controllers/application_controller.rb
# require 'rack_authenticator'
class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception  # Enable CSRF protection
  skip_before_action :verify_authenticity_token  # Not recommended for production, just for now!
    # config.web_console.whiny_requests = false

    def set_cors_headers
      #Temporary for local dev, proxy setup will remove the need for this
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
      headers['Access-Control-Request-Method'] = '*'
      headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    end


  end
