//// JS for shopping cart
import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  http.get("http://localhost:3000/products").then((data) => {
    ui.showProductsAddToCart(data);
    updateCartTotal();
    removeCartItem();
  });
});
////// update price if quantity is changed
  let quantityInputs = document.getElementsByClassName("form-control");
  //// console.log(quantityInputs);
  for ( let i = 0 ; i < quantityInputs.length ; i++ ) {
    console.log("hereee");
    let input = quantityInputs[i];
    input.addEventListener('change' , quantityChanged)
  }
  
///check the quantity input and set it "1" for negative values
function quantityChanged(event) {
     let inputValue = event.target ;
     if (isNaN(inputValue.value) || inputValue.value <= 0 ) {
      inputValue.value = 1 ;
     }
     else if (event.target.classList.contains ('form-control')) {
      inputValue = inputValue.value;
     }
     updateCartTotal();
}

/////// function for remove product from cart list table

let productListCart = document.getElementById('myTableCart');
// console.log(productListCart);
let productListItems = document.querySelectorAll('td');
console.log(productListItems);

productListCart.addEventListener("click" , removeCartItem);

function removeCartItem(e) {
  // console.log(e.target.parentNode);
  if (e.target.classList.contains ('btn-outline-danger')) {
    ///alert("product removed");
    ui.showSuccessMessageRemovedFromCart();
    ///console.log(e.target.parentNode.parentNode);
		let itemToRemove = e.target.parentNode.parentNode;
		itemToRemove.remove();
    }
    
    updateCartTotal();
    
  }
  
////function for update cart total
function updateCartTotal() {
    ///console.log("hereeeee");
    let tableProducts= document.getElementsByClassName("tableCart")[0];
    let cartRows = tableProducts.getElementsByClassName("table-default");
    console.log(cartRows);
    let total = 0 ;
    for ( var i= 0 ; i < cartRows.length ;i++) {
      // var cartRow = cartRows[i];
      let priceElement = document.getElementsByClassName("price")[0];
      let quantityElement = document.getElementsByClassName("form-control")[0];
      // console.log(priceElement , quantityElement);
      let price = parseFloat(priceElement.innerText.replace("$" , ""));
      let quantity = quantityElement.value
      total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100 ;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total; 
}

////event at click on Order now button
document.getElementsByClassName("btn btn-secondary")[0].addEventListener("click" , orderClicked);

function orderClicked() {
  ui.showSuccessMessageOrderNow();
  ///alert ("Thank you for your order");
  let tableBodyCart = document.getElementById("myCartTable");
  console.log(tableBodyCart);
  let cartItems = document.getElementsByClassName("table-default")[0];
  console.log(cartItems);
  while (tableBodyCart.length >= 1 ) {
    tableBodyCart.length.value = 1;
  }
  updateCartTotal();
}

////check the product name
// let cartItemsNames = document.getElementsByClassName("media-heading");
// console.log(cartItemsNames);
// for ( var i= 0 ; i < cartItemsNames.length ;i++) {
//   if (cartItemsNames[i].innerText == `${product.title}` ) {
//     alert (" This product is already added to cart !! Please modify quantity!");
//     return;
//   }
// }

