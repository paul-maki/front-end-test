import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ProductListPage } from './ProductListPage';
import store from '../../../state/store/store';

test('Renders product list page', () => { 
    render(<Provider store={store}><ProductListPage /></Provider> );
})