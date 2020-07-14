import posters from '../products/posters.js';

const test = QUnit.test;

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

    const expected = '"<ul id="poster"><img src="../assets/BM_2020_poster.jpg" height="450" width=""><li>Mulitverse</li><li>Burning Man: Mulitverse 2020</li><li>2020</li><li>12.00</li><input type="number" name="quantity" value="num1"><button id="add-button">Add to Cart</button></ul>"';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = posters(poster1);
    const result = dom.outerHTML;


    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(result, expected);
});
