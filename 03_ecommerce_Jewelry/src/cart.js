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
//////
  let quantityInputs = document.getElementsByClassName("form-control");
  for ( let i = 0 ; i < quantityInputs.length ;i++ ) {
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
     updateCartTotal();
}
///////
// const removeCartItemsBtn = document.getElementsByClassName("btn-outline-danger");
// console.log(removeCartItemsBtn);

let productListCart = document.getElementById('myTableCart');
console.log(productListCart);
let productListItems = document.querySelectorAll('td');
console.log(productListItems);

productListCart.addEventListener("click" , removeCartItem);

function removeCartItem(e) {
  console.log(e.target.parentNode);
  if (e.target.classList.contains ('btn-outline-danger')) {
    console.log(e.target.parentNode.parentNode);
		let itemToRemove = e.target.parentNode.parentNode;
		itemToRemove.remove();
    }
    // const id = e.target.id;
    // console.log(id);
    // const cartProductList = JSON.parse(localStorage.getItem("cart"));
    // for (let i = 0; i < cartProductList.length; i++) {
    // if (cartProductList[i] === id) {
    // cartProductList.splice(i, 1);
    // localStorage.setItem("cart", JSON.stringify(cartProductList));
    updateCartTotal();
  }
  
// function removeCartItem(e) {
//   if (e.target.classList.contains("btn-outline-danger")) {
//     e.target.parentElement.parentElement.remove();
//     const id = e.target.id;
//     console.log(id);
//     const cartProductList = JSON.parse(localStorage.getItem("cart"));
//     for (let i = 0; i < cartProductList.length; i++) {
//       if (cartProductList[i] === id) {
//         cartProductList.splice(i, 1);
//         localStorage.setItem("cart", JSON.stringify(cartProductList));
//       }
//     }
//   }
//   updateCartTotal();
// }

////function for update cart total
function updateCartTotal() {
    // console.log("hereeeee");
    let tableProducts= document.getElementsByClassName("tableCart")[0];
    let cartRows = tableProducts.getElementsByClassName("table-default");
    // console.log(cartRows);
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


