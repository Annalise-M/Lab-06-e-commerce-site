function renderPosters(posters) {

    const li = document.createElement('li');
    li.className = posters.category;
    li.title = posters.description;

    const h3 = document.createElement('h3');
    h3.textContent = posters.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + posters.image;
    img.alt = posters.name + ' image';
    img.style.height = '500px';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + posters.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = posters.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;

}
export default renderPosters;


