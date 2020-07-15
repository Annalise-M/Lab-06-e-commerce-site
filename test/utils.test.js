import posters from '../products/posters.js';
import { findById, calcLineItem, calcOrderTotal } from '../utils.js';
import cart from '../shoppingCart/cart.js';

const test = QUnit.test;


test('find item by id', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'poster-1';
    const expected = 'Mulitverse';

    //Act 
    // Call the function you're testing and set the result to a const
    const chosenPoster = findById(posters, id);

    //Assert
    // Make assertions about what is expected valid result
    assert.ok(chosenPoster);
    assert.equal(chosenPoster.name, expected);
});


test('to return null if id not found', assert => {
    //Arrange
    const id = 'not found';
    const expected = null;

    //Act 
    const foundPoster = findById(posters, id);

    //Assert
    assert.equal(foundPoster, expected);
});


test('calculating line item', (assert) => {
    //Arrange
    
    const quantity = 2;
    const cost = 12.00;
    const expected = 24.00;

    //Act 
    const total = calcLineItem(quantity, cost);

    //Assert
    assert.equal(total, expected);
});

test('calculate the total order', (assert) => {
    //Arrange
    const expected = 72;

    //Act
    const orderTotal = calcOrderTotal(cart, posters);

    //Assert
    assert.equal(orderTotal, expected);
});

