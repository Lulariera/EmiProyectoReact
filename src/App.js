import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart';
import Hero from './componentes/Hero/Hero';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
                 <NavBar />
                <Routes>
                    <Route path='/' element={<Hero/>} />
                    <Route path='category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='checkout' element={<Checkout />} />
                </Routes>
                </BrowserRouter>
        </CartProvider>
  );
}

export default App;
