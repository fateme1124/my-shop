
import { Switch , Route , Redirect  } from 'react-router-dom';

// component
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared.js/Navbar';
import ShopCart from './components/ShopCart';

// context
import ProductsContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path='/products/:id' component={ProductDetails} />
          <Route path='/products' component={Store} />
          <Route path='/cart' component={ShopCart} />
          <Redirect to='/products' />
        </Switch> 
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
