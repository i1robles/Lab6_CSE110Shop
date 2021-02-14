// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('li');
    wrapper.setAttribute('class', 'wrapper');

    const button = document.createElement('button');
    button.textContent = "Add to Cart";  //read this from local storage

    const img = document.createElement('img');
    img.src = this.getAttribute('img');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');

    const price = document.createElement('p');
    price.setAttribute('class', 'price');

    const style = document.createElement('style');
    style.textContent = `
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .wrapper {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .wrapper > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .wrapper > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .wrapper > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
    `

    shadow.appendChild(wrapper);
    shadow.appendChild(style);
    wrapper.appendChild(img);
    wrapper.appendChild(title);
    wrapper.appendChild(price);
    wrapper.appendChild(button);
  }
}

customElements.define('product-item', ProductItem);