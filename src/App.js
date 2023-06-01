import './App.css';
import React from 'react';
import Header from "./components/Layout/Header";
import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';
import Main from './components/Layout/Main';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './components/store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () =>{
    setCartIsShown(true);
  };
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    <Header/>
    <Nav onClick={showCartHandler}/>
    { cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Main/>
    <Footer/>
    </CartProvider>
  );
}

export default App;
