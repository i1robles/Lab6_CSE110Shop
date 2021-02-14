// Script.js

window.addEventListener('DOMContentLoaded', () => {

  if (!localStorage.getItem("storedList")) {      //if not in local, fetch and add to local
    let fakeStoreRequest = new Request('https://fakestoreapi.com/products');
    await fetch(fakeStoreRequest)
    .then(fsPromise => fsPromise.json())
    .then(fsResponse => localStorage.setItem("storedList", JSON.stringify(fsResponse)));
  }

});
  
  let cartCount = document.getElementById("cart-count");
  let grabbedString = localStorage.getItem("storedList");
  let grabbedArray = JSON.parse(grabbedString);
  let productList = document.getElementById('product-list');
  
  for (var key in grabbedArray) {   //iterate through json objects
    
    let currProduct = document.createElement('product-item');
    
    currProduct.shadowRoot.childNodes[0].childNodes[0].setAttribute('src', grabbedArray[key]['image']);
    currProduct.shadowRoot.childNodes[0].childNodes[1].textContent = grabbedArray[key]['title'];
    currProduct.shadowRoot.childNodes[0].childNodes[2].textContent = grabbedArray[key]['price'];
    currProduct.shadowRoot.childNodes[0].childNodes[3].setAttribute('button', grabbedArray[key]['button']);


    currProduct.shadowRoot.childNodes[1] = grabbedArray[key]['style'];

    
    productList.appendChild(currProduct);

    
    currProduct.shadowRoot.childNodes[0].childNodes[3].addEventListener('click', function() {
      if (currProduct.shadowRoot.childNodes[0].childNodes[3].textContent == "Add to Cart") {   //if not added, add to cart
        var currCount = cartCount.textContent;
        currCount = +currCount + 1;
        cartCount.textContent = currCount;
        alert('Added to Cart!');

        //local memory part//
        let shopString = localStorage.getItem("shopCart");
        let shopJson = JSON.parse(shopString);

        //add this item to local
        //shopJson['shopCart'].push(currProduct.shadowRoot.childNodes[0].childNodes[1].textContent);
        localStorage.setItem("shopCart", JSON.stringify(shopJson));
        currProduct.shadowRoot.childNodes[0].childNodes[3].textContent = "Remove from Cart";
      }
  
      else if (currProduct.shadowRoot.childNodes[0].childNodes[3].textContent == "Remove from Cart") { //if already added, remove
        var currCount = cartCount.textContent;
        currCount = +currCount - 1;
        cartCount.textContent = currCount;
        alert('Removed from Cart.');

        //local memory part//
        let shopString = localStorage.getItem("shopCart");
        let shopJson = JSON.parse(shopString);

        //remove this item 
        /*
        for( var i = 0; i < shopJson.length; i++){ 
          if ( shopJson[i] === currProduct.shadowRoot.childNodes[0].childNodes[1].textContent) { 
              shopJson.splice(i, 1); 
          }
        }
        */

        localStorage.setItem("shopCart", JSON.stringify(shopJson));
        currProduct.shadowRoot.childNodes[0].childNodes[3].textContent = "Add to Cart";
      }
      
    }); 

  }
  

