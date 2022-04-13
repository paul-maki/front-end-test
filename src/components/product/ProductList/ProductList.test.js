import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../state/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductList } from './ProductList';

const productList = [
    {
        "id": "ZmGrkLRPXOTpxsU4jjAcv",
        "brand": "Acer",
        "model": "Iconia Talk S",
        "price": "170",
        "imgUrl": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
    },
    {
        "id": "AasKFs5EGbyAEIKkcHQcF",
        "brand": "alcatel",
        "model": "Flash (2017)",
        "price": "",
        "imgUrl": "https://front-test-api.herokuapp.com/images/AasKFs5EGbyAEIKkcHQcF.jpg"
    }
]

test('Renders product list component', () => { 
    render(<Provider store={store}>
                <Router>
                    <ProductList productList={productList}  />
                </Router>
            </Provider> );
})

test('Get acer product', () => { 
    const { container } = render(<Provider store={store}>
                <Router>
                    <ProductList productList={productList}  />
                </Router>
            </Provider> );

    expect(container).toHaveTextContent('Acer')
})