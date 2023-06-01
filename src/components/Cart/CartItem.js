 import classes from "./CartItem.module.css";

 const CartItem = (props) =>{
    
    return(
        <article className={classes['cart-item']}>
             <img src={props.img} className={classes['cart-item-img']} alt={props.name} />
            <div>
                <h4 className={classes["cart-item-name"]}>
                {props.name}
                </h4>
                <p className={classes["cart-item-price"]}>
                {props.price}
                </p>
                <button className={classes["cart-item-remove-btn"]} >
                remove
                </button>
            </div>
            <div>
                <button className={classes["cart-item-increase-btn"]} onClick={props.onAdd}>
                <i className="fas fa-chevron-up" />
                </button>
                <p className={classes["cart-item-amount"]} >
                {props.amount}
                </p>
                <button className={classes["cart-item-decrease-btn"]} onClick={props.onRemove}>
                <i className="fas fa-chevron-down" />
                </button>
            </div>
        </article>
    )
 }

 export default CartItem