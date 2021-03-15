// class UI for card products
class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.description = document.getElementById('description');
	}
// function  for show card products on Our Collections section
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
         <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title-title">${product.title}</h4>
							 <h4 class="card-title-price">Price:${product.price}</h4>
              
               <button class="btn btn-secondary" id="${product.id}">Details</button>
            </div>
         </div>
         `;
			this.productsDiv.innerHTML = output;
		});
	}
}

/////  <p class="card-text">${product.description}</p>
// onclick="window.location.href='details.html'

export const ui = new UI();

// function  for show products in table products in admin page
// showProducts(products) {
// 	let output = '';
// 	products.forEach((product) => {
// 		output += `
// 			 <div class="card m-3" style="width: 18rem;">
// 					<div class="card-body">
// 						 <img src="${product.image}" class="card-img-top" alt="...">
// 						 <h4 class="card-title-title">${product.title}</h4>
// 						 <h4 class="card-title-price">Price:${product.price}</h4>
// 						 <p class="card-text">${product.description}</p>
// 						 <button class="btn btn-secondary" id="${product.id}">Details</button>
// 					</div>
// 			 </div>
// 			 `;
// 		this.productsDiv.innerHTML = output;
// 	});
// }
// }

