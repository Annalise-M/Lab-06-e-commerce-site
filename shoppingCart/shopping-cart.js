import posters from '../products/posters.js';
import { 
    findById, 
    calcOrderTotal, 
    toUSD,
    getCart, 
} from '../utils.js';
import renderLineItem from './renderLineItem.js';

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

