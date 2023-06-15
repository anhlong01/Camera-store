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
      <div className="modal" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button
          type="button"
          className="btn-close"
          data-mdb-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-mdb-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>

      </>
    );
  }

  export default HomePage;