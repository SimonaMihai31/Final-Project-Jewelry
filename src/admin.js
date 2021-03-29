import { http } from './http.js';
import { ui } from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showProductsAdmin(data));
}

// de luat tot in admin.js
// Add product to db
document.getElementById('add-product').addEventListener('click', addNewProduct);

function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const descriptionValue = document.getElementById('description').value;
	const quantityValue =document.getElementById('quantity').value;
	const imageValue= document.getElementById("image").value;

	let product = {
		title: titleValue,
		price: priceValue,
		description: descriptionValue,
		quantity :quantityValue,
		image :imageValue
	};
	  
	http
		.post('http://localhost:3000/products', product)
		.then((data) => getProducts());

}

// function for delete product from db.json at click on delete in admin page

document.getElementById('productsAdmin').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
    console.log(id);
		http
			.delete(`http://localhost:3000/products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
	}
}