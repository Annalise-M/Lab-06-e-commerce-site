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


export function calcOrderTotal(cart, posters) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const poster = findById(posters, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, poster.price);

        orderTotal += lineTotal;
    }
    return orderTotal;
}

export function getCart(){
    const dynamicCart = localStorage.getItem('CART');
    const cart = JSON.parse(dynamicCart) || [];
    
    return cart;
}
