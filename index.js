var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100)
 var newObj = {[item]: price}
 cart.push(newObj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  // var message = []
  // if(cart.length === 0){
  //   message = "Your shopping cart is empty."
  //   //return console.log(`Your shopping cart is empty.`)
  // }else if(cart.length === 1){
  //   message = "In your cart, you have " + cart
  // }
  // return message
}

function total() {
  // write your code here
  var total = 0
  for(var i in cart){
    total = total + cart[i]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
