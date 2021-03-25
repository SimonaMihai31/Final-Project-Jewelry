import { http } from './http.js';
import { ui } from './ui.js';
import { initCart } from "./app.js";

/// 
const id = window.location.search.split('=')[1];
console.log(id);
window.onload = () => {
   if (window.location.search !== ''){ 
      const id = window.location.search.split('=')[1];    
      console.log(id);
      http
      .get('http://localhost:3000/products/'+ id)
      .then((data) => ui.showProductDetails(data));
   }
}

//adding to local storage
export function btnAddToCart() {
   document.getElementById(`${id}`).addEventListener(
      "click", 
      function (e) {
      if (e.target.id == id) {
         // alert("Product add to cart");
         addItemToCart(id);
      }
      ui.showSuccessMessageAddToCart();
   });
}

function addItemToCart(id) {
  const cartProductList = JSON.parse(localStorage.getItem("cart"));
  cartProductList.push(id);
  localStorage.setItem("cart", JSON.stringify(cartProductList));
  /////
}


