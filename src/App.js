import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductListPage } from './components/product/ProductList/ProductListPage';
import { ProductDetailPage } from './components/product/ProductDetail/ProductDetailPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProductListPage/>}/>
          <Route path='/:id' element={<ProductDetailPage/>} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;