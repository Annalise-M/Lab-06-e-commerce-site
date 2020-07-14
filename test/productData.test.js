// IMPORT MODULES under test here:
// import { posters } from '../products/productData.js';

const test = QUnit.test;



test('renders poster 1', (expect) => {
    //Arrange
 
    const poster1 = {
        id: 'poster-1',
        name: 'Mulitverse',
        image: 'BM_2020_poster.jpg',
        description: 'Burning Man Multiverse 2020',
        category: 2020,
        price: 12.00,
    };

    const expected = '';

    const dom = posters(poster1);
    const html = dom.outerHTML;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
