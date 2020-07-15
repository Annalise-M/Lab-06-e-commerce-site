import renderLineItem from '../shoppingCart/renderLineItem.js';
import { findById } from '../utils.js';
import posters from '../products/posters.js';

const test = QUnit.test;

test('renders a line item', assert => {
    //Arrange
    const lineItem = {
        id: 'poster-2',
        quantity: 1
    };

    const poster = findById(posters, lineItem.id);
    const expected = '<tr><td class="chosen-item">Metamorphesis</td><td>1</td><td>$12.00</td><td class="line-item-total">$12.00</td></tr>';

    //Act
    const dom = renderLineItem(lineItem, poster);
    const html = dom.outerHTML;

    //Assert
    assert.equal(html, expected);
});

