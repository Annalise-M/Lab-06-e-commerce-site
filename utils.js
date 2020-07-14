import renderPosters from './renderPosters.js';
import posters from './products/posters.js';

const list = document.getElementById('posters');

for (let i = 0; i < posters.length; i++) {
    const poster = posters[i];
    const dom = renderPosters(poster);
    
    list.appendChild(dom);
}


// findbyId function
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

