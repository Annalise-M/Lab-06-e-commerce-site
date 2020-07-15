import posters from './posters.js';
import renderPosters from './renderPosters.js';

const list = document.getElementById('posters');

for (let i = 0; i < posters.length; i++) {
    const posterItem = posters[i];
    const postersLi = renderPosters(posterItem);

    list.appendChild(postersLi);
}

