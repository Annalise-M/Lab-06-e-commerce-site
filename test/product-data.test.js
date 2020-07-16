import renderPosters from '../products/renderPosters.js';

const test = QUnit.test;

QUnit.module('Render Posters');

test('some thing goes here ', (assert) => {
    //Arrange
 
    const poster1 = {
        id: 'poster-1',
        name: 'Mulitverse',
        image: 'BM_2020_poster.jpg',
        description: 'Burning Man Multiverse 2020',
        category: 2020,
        price: 12.00
    };

    const expected = '<li class="2020" title="Burning Man Multiverse 2020"><h3>Mulitverse</h3><img src="../assets/BM_2020_poster.jpg" alt="Mulitverse image" style="height: 500px;"><p class="price">$12.00<button value="poster-1">Add to Cart</button></p></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderPosters(poster1);
    const result = dom.outerHTML;


    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(result, expected);
});

