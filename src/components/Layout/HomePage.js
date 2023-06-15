import { React, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Cart from '../Cart/Cart';
import AddForm from '../UI/AddForm';

const HomePage = () => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () =>{
      setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
      setCartIsShown(false);
    };
  
    const [formIsShown, setFormIsShown] = useState(false);
    const showFormHandler = () =>{
      setFormIsShown(true);
    };
    const hideFormHandler = ()=>{
      setFormIsShown(false);
    };
  
    
    return (
     <>
      <Header/>
      <Nav onClick={showCartHandler} onOpen={showFormHandler}/>
      { cartIsShown && <Cart onClose={hideCartHandler}/>}
      { formIsShown && <AddForm onClose={hideFormHandler}/>}
      <Main/>
      <Footer/>
      </>
    );
  }

  export default HomePage;