import posters from '../products/posters.js';
import { findById } from '../utils.js';

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

