import { btnAddToCart } from "./details.js";

// class UI for card products
class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.productsDetailsDiv = document.getElementById('details-products');
		this.detailsDivParent = document.getElementById('details');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.description = document.getElementById('description');
		this.quantity = document.getElementById("quantity");
		this.tableBody = document.getElementById("myTable");
		this.tableBodyCart = document.getElementById("myCartTable");
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
							 <h6 class="title-price">Price:${product.price}</h6>
               <button class="btn btn-secondary" style="color:#f3969a" onclick="location.href='details.html?id=${product.id}';" id="${product.id}" style="margin-left:75px">Details</button>		 
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
					     <img  class="card-img-top" style="max-width:100%;" src="${product.image}" />
			     </div>
			 <div class="col-xs-8" >
					 <h2 class="card-title-title">${product.title}</h2>    
					 <h3  class="title-price" style="margin-top:5px;">Price : ${product.price}</h3>
					 <span style="margin-bottom:15px" class="badge badge-pill badge-warning">In stock</span><br>
					 <button class="btn btn-secondary" style="color:#f3969a;margin-bottom:20px" id="${product.id}"><span style="margin-right:20px" class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to Cart</button>
					 <div class="desc">
							 <p style="padding:15px;">
									 <small>${product.description}</small>
							 </p>       
					 </div>                                       
			 </div>                            
					 
			 </div>	`;
				this.productsDetailsDiv.innerHTML = output;
				btnAddToCart();
		;
	}	
	// // function  for show products in table cart in cart page
	showProductsAddToCart(products) {
		let output = '';
		const productsIdArr = JSON.parse(localStorage.getItem("cart"));
	  console.log(productsIdArr);
		let productID ="";
		for (let i =0 ; i < productsIdArr.length ;i++ ) {
			productID = productsIdArr[i];
		
		products.forEach((product) => {
			if ( productID == product.id ) {
				output += `
			<tr class="table-default">
          <td class="col-sm-8 col-md-6">
              <div class="media">
                  <a class="thumbnail pull-left" href="#"> 
									<img class="media-object" src="${product.image}"></a>
                  <div class="media-body">
                      <h4 class="media-heading">
                        <a class="media-heading" href="details.html?id=${product.id}">${product.title}</a>
                      </h4>
                      <h6 class="text-secondary"> by <a class="text-secondary" href="index.html">I <i class="fas fa-heart"></i> Diamonds</a></h6>
                      <span>Status: </span><span class="badge badge-pill badge-warning">In stock</span>
                  </div>
              </div>
          </td>
          <td class="col-sm-1 col-md-1">
              <input type="number" class="form-control" class="quantity" value="1">
          </td>
          <td class ="price" class="col-sm-1 col-md-1 text-center"><strong>${product.price}</strong></td>
          <td class="col-sm-1 col-md-1">
					<button class="btn btn-outline-danger" id="${product.id}">Remove</button>   
          </td>
      </tr>
         `;
				 this.tableBodyCart.innerHTML = output;
			}			 
		});
	}
}	
/// success message for product added to cart
showSuccessMessageAddToCart() {
	  let successMessage = document.createElement('p');
		// successMessage.classList.add('success');
		successMessage.innerHTML = `
		<div class="alert alert-dismissible alert-secondary">
         <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong style="color:#f3969a" >Well done! Product Added To Cart </strong> 
    </div>`
		// successMessage.innerHTML =
		// 	'Product Added To Cart! ';
		let divFirst = document.getElementById('details-products');
		let detailsDivParent = document.getElementById('details');
		detailsDivParent.insertBefore(successMessage, divFirst);

		setTimeout(() => {
			successMessage.remove();
		}, 3000);
}
/// success message for product removed from cart
showSuccessMessageRemovedFromCart() {
	let successMessage = document.createElement('p');
	successMessage.innerHTML = `
	<div class="alert alert-dismissible alert-danger">
			 <button type="button" class="close" data-dismiss="alert">&times;</button>
				<strong>Product Removed From Cart </strong> 
	</div>`
	let elemFirst = document.getElementById('myTableCart');
	let cartDivParent = document.getElementById('cartProductsDiv');
	cartDivParent.insertBefore(successMessage, elemFirst);

	setTimeout(() => {
		successMessage.remove();
	}, 3000);
}
/// success message for order now
showSuccessMessageOrderNow() {
	let successMessage = document.createElement('p');
	successMessage.innerHTML = `
	<div class="alert alert-dismissible alert-secondary">
			 <button type="button" class="close" data-dismiss="alert">&times;</button>
				<strong> Thank you for your order !!! </strong> 
	</div>`
	let elemFirst = document.getElementById('myTableCart');
	let cartDivParent = document.getElementById('cartProductsDiv');
	cartDivParent.insertBefore(successMessage, elemFirst);

	setTimeout(() => {
		successMessage.remove();
	}, 5000);
}
}

export const ui = new UI();
/* <button class="btn btn-outline-danger" id="${product.id}">Remove</button> */

