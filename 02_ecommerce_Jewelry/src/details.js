import { http } from './http.js';
import { ui } from './ui.js';

/// 
// const id = window.location.search.split('=')[1];
// console.log(id);
window.onload = () => {
   if (window.location.search !== ''){ 
      const id = window.location.search.split('=')[1];    
      console.log(id);
      http.get('http://localhost:3000/products/'+ id).then((data) => ui.showProductDetails(data));
   }
}