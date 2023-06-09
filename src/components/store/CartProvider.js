import { useReducer } from 'react';

import CartContext from './Cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems;
    
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id 
    );

    const existingCartItem = state.items[existingCartIndex];
    if(existingCartItem){
      const updatedItem ={
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;

      } else{
        updatedItems = state.items.concat(action.item);
      }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if(action.type === 'REMOVE'){
    const existingCartIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else{
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount -1};
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    }

    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === 'DELETE'){
    const existingCartIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartIndex];
    const amount = existingCartItem.amount;
    const price = existingCartItem.price;
    const updatedTotalAmount = state.totalAmount - price*amount;
    const updatedItems = state.items.filter(item => item.id !== action.id);
    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const deleteItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'DELETE', id: id});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
