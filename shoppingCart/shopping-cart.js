import posters from '../products/posters.js';
import { 
    findById, 
    calcOrderTotal, 
    toUSD,
    getCart, 
} from '../utils.js';
import renderLineItem from './renderLineItem.js';

const placeOrderButton = document.getElementById('place-order-button');

const cart = getCart();

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i]; 
    const poster = findById(posters, lineItem.id);
    const dom = renderLineItem(lineItem, poster);
    
    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, posters);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
} 
else {
    placeOrderButton.addEventListener('click', () => {
        let arrayMessage = [];

        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            const poster = findById(posters, item.id);
            const name = poster.name;

            arrayMessage.push(`You're order for ${name} ${item.quantity} has been placed! Thank you!`);

        }
        //work on prettier string info when prompt comees up
        alert(`${arrayMessage.join(', ')}`);
        
        localStorage.removeItem('CART');

        window.location = '../index.html';
    });
}


