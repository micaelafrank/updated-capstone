Rails.configuration.stripe = {
  :publishable_key => "pk_test_51LNkyJFGyqtGlrO1bntRQgEes1YMTphf5qJEVJUcilwscukUrQa3HIhHtFu5dwOOus2UdsjKGRYRjcCahUPdnDDm00254IeMVb",
  :secret_key => "sk_test_51LNkyJFGyqtGlrO1xFLXrv098Qjj5z6vYskPgqIW4vEBcVYEs0Yz9HwDYXqcAH35QF8gJVn6GTr1vheHWr7j3PRE00uyVr0V6e"
}
Stripe.api_key = Rails.configuration.stripe[:secret_key]