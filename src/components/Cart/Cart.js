import classes from "./Cart.module.css";
import Modal from "../UI/Modal"
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../store/Cart-context";

const Cart = (props) =>{
  var nf = new Intl.NumberFormat();
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const deleteItemHandler = (id)=>{
    cartCtx.deleteItem(id)
  }
  const totalAmount = nf.format(cartCtx.totalAmount);

  const cartItems = cartCtx.items.map((item)=>
      <CartItem 
      image={item.image} 
      name={item.name} 
      price={item.price} 
      key={item.id}
      amount={item.amount}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removeItemHandler.bind(null, item.id)}
      onDelete={deleteItemHandler.bind(null, item.id)}
      />
  );
  return(
    <Modal onClose={props.onClose}>
    <button className={classes['cart-close']} onClick={props.onClose}>
      <i className="fas fa-times" />
    </button>
    <header className="my-3">
      <h3 className="text-center">Giỏ hàng</h3>
    </header>
    <div className={classes['cart-items']}>
        {cartItems}
    </div>
    <footer>
      <h3 className="cart-total text-slanted">Tổng giá : {totalAmount}đ</h3>
      {hasItems && <button className="cart-checkout btn btn-success">Đặt hàng</button>}
    </footer>
  </Modal>
    )
  
}

export default Cart;