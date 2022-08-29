import './App.css';
import Home from './comonents/Home';
import Navbar from './comonents/Navbar';
import Products from './comonents/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './comonents/Product';
import Cart from './comonents/Cart';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products/:id" element={<Product/>} />
        </Routes>
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;
