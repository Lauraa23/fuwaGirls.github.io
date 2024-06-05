//Intenta separar los eventos en este archivo.

import { createFilterButtons, createProductCards } from "./menu.js";
import {searchProducts} from "./searcher.js";
import { addToCart } from "./cart.js";
import { products } from "../assets/data/data.js";

document.body.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('add-button')) {
    addToCart(event.target.getAttribute('data-id'));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createFilterButtons();
  createProductCards(products);


//Intenta separar los eventos en este archivo.


const buttons = document.getElementsByClassName('filter');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {
  
        let filter = buttons[i].textContent;

        searchProducts({filter});
    });
    
}


});




