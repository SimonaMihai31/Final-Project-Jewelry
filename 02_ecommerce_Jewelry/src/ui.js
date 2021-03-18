// class UI for card products
class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.productsDetailsDiv = document.getElementById('details-products');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.description = document.getElementById('description');
		this.quantity = document.getElementById("quantity");
		this.tableBody = document.getElementById("myTable");
		this.productsDivAdmin = document.getElementById("productsAdmin");
		this.image = document.getElementById("image");
		
	}
	// // function  for show products in table products in admin page
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
			output = `
			<tr id ="table-row">
            <th scope="row">${product.id}</th>
						<td><img src="${product.image}" width="25px "alt="..."></td>
            <td>${product.title}</td>
            <td>${product.price}</td>
						<td>${product.quantity}</td>
						<td><button class="btn btn-outline-danger delete" id="${product.id}">Delete</button></td>
      </tr>
         `;
				 this.tableBody.innerHTML += output;
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
               <button class="btn btn-secondary" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">Details</button>
            </div>
         </div>
         `;
			this.productsDiv.innerHTML = output;
		});
	}	
	// function  for show card products on details
	showProductDetails(product) {
		let output = '';
		output += `
		<div class="row">
			     <div class="col-xs-4 item-photo">
					     <img style="max-width:100%;" src="${product.image}" />
			     </div>
			 <div class="col-xs-8" >
					 <h2>${product.title}</h2>    
					 <h5 class="title-price">Price</h5>
					 <h3 style="margin-top:5px;">${product.price}</h3>
					 <div class="section" style="padding-bottom:10px;">
							 <button class="btn btn-secondary"><span style="margin-right:20px" class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to Cart</button>
					 </div> 
					 <div class="desc">
							 <p style="padding:15px;">
									 <small>${product.description}</small>
							 </p>       
					 </div>                                       
			 </div>                            
					 
			 </div>	`;
				this.productsDetailsDiv.innerHTML = output;
		;
	}		
}

export const ui = new UI();


