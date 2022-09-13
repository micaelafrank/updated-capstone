class Api::CheckoutController < ApplicationController
    require 'stripe'
    Stripe.api_key = 'sk_test_51LNkyJFGyqtGlrO1xFLXrv098Qjj5z6vYskPgqIW4vEBcVYEs0Yz9HwDYXqcAH35QF8gJVn6GTr1vheHWr7j3PRE00uyVr0V6e'

    
    def create_payment_intent
        payment_intent = Stripe::PaymentIntent.create(
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
        )
        render json: {clientSecret: payment_intent['client_secret']}
    end
end
