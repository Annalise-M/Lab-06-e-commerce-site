import posters from '../products/posters.js';
import { findById, calcLineItem } from '../utils.js';

// import cart from '../shoppingCart/cart.js';


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


test('calculating line item', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 2;
    const cost = 12.00;
    const expected = 24.00;

    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcLineItem(quantity, cost);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(total, expected);
});
