// class UI for card products
class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.description = document.getElementById('description');
		this.quantity = document.getElementById("quantity");
		this.tableBody = document.getElementById("myTable");
	}
	// // function  for show products in table products in admin page
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
			output += `
			<tr id ="table-row">
            <th scope="row">${product.id}</th>
            <td>${product.image}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
						<td>${product.quantity}</td>
						<td><button type="button" class="btn btn-dark delete" id="${product.id}" data-toogle="modal" data-target="#deleteModal">Delete</button></td>
      </tr>
         `;
				 this.tableBody.innerHTML = output;
		});
	}
// function  for show card products on Our Collections section
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
         <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
						   <h5 class="card-title-title">${product.title}</h5>
               <img src="${product.image}" class="card-img-top" alt="...">
							 <h6 class="card-title-price">Price:${product.price}</h6>
							 <button type="button" class="btn btn-outline-warning">Add to cart</button>
               <button class="btn btn-secondary" id="${product.id}">Details</button>
            </div>
         </div>
         `;
			this.productsDiv.innerHTML = output;
		});
	}
}

// onclick="window.location.href='details.html'

export const ui = new UI();




