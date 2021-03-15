class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.description = document.getElementById('description');
	}

	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
         <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.title} ${product.price}</h4>
               <p class="card-text">${product.description}</p>
               <button class="btn btn-secondary delete" id="${product.id}">Delete</button>
            </div>
         </div>
         `;
			this.productsDiv.innerHTML = output;
		});
	}
}

export const ui = new UI();
