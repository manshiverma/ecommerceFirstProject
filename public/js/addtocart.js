//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//cart working js
if(document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
}else{
  ready();
}

//making function
function ready(){
  //remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

   // Quantity Changes
var quantityInputs = document.getElementsByClassName ("cart-quantity");

for (var i = 0; i < quantityInputs.length; i++) {
var input = quantityInputs[i];
input.addEventlistener("change", quantityChanged);
}
}

//remove items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// Quantity Changes
function quantityChanged (event) {
var input = event.target;
if (isNaN(input.value) || input.value <= 0) {
input.value = 1;
}
updatetotal();
}



function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName ("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName ("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName ("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace ("", ".00"));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName ("total-price")[0].innerText = total + ".00";
    }
    
}