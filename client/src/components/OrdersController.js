// class OrdersController<ApplicationController
//   include CurrentCart
//   before_action : set_cart, only:  [: index, : show, : create]
//   def index
// @orders = Order.where("user_id = ?", current_user.id)
// end
//   def show
// @order = Order.find(params[: id])
// end
//   def new
//     @order = Order.new
// end
//   def create
// @order = current_user.orders.new
// if @order.valid?
// orderitems = []
// total_price = 0
// @cart.items.each do | product |
//     current_orderitem = Orderitem.create(product: Product.find(product["product_id"]),
//         quantity: product["amount"], price: Product.find(product["product_id"]).price)
//         orderitems << current_orderitem
// total_price += current_orderitem.quantity * current_orderitem.price
// end
// @order.orderitems = orderitems
// @order.total_price = total_price
// if @order.save
// session[:shoppingcart] = nil
//         redirect_to user_orders_path
//       else
// render: new
//     end
//     else
// render: new
//     end
// end
// end


//on submit order: 
// patch item so that it is not available. delete it from items list
// don't have to patch the user_id because that data will be logged
// in the orders controller