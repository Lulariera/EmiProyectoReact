import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
                 <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
                </Routes>
                </BrowserRouter>
        </CartProvider>
  );
}

export default App;
