import { toUSD } from '../utils.js';

export default function renderLineItem(cartItem, posters) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = posters.name;
    nameTd.classList.add('chosen-item');
    tr.appendChild(nameTd);

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;
    tr.appendChild(quantityTd);

    const priceTd = document.createElement('td');
    priceTd.textContent = toUSD(posters.price);
    tr.appendChild(priceTd);

    const totalTd = document.createElement('td');
    totalTd.className = 'line-item-total';
    const total = cartItem.quantity * posters.price;
    totalTd.textContent = toUSD(total);
    tr.appendChild(totalTd);

    return tr;
}

