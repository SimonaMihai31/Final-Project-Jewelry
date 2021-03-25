import { http } from './http.js';
import { ui } from './ui.js';

// Get Products on DOM load

////document.addEventListener('DOMContentLoaded', getProducts);
document.addEventListener("DOMContentLoaded", () => {
  getProducts();
  initCart();
});


function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showProducts(data))
		
}

export function initCart() {
  const cartProductList = JSON.parse(localStorage.getItem("cart"));
  if (!cartProductList) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}
