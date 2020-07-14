import renderPosters from './renderPosters.js';
import posters from './products/posters.js';


const list = document.getElementById('posters');

for (let i = 0; i < posters.length; i++) {
    const poster = posters[i];
    const dom = renderPosters(poster);
    
    list.appendChild(dom);
}


export function findById(array, id) {
    let chosenItem;

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            chosenItem = item;
        }
    }

    return chosenItem;
}


function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}


export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}


export function calcLineItem(quantity, price) {
    const orderTotal = quantity * price;

    return roundCurrency(orderTotal);
}

export function calcOrdeTotal(cart, posters) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const poster = findById(posters, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quanity, poster.price);

        orderTotal += lineTotal;
    }
    return orderTotal;
}

