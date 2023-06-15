 import classes from "./CartItem.module.css";

 const CartItem = (props) =>{
    var nf = new Intl.NumberFormat();
    return(
        <article className={classes['cart-item']}>
             <img src={props.image} className={classes['cart-item-img']} alt={props.name} />
            <div>
                <h5 className={classes["cart-item-name"]}>
                {props.name}
                </h5>
                <p className={classes["cart-item-price"]}>
                 {nf.format(props.price)}đ
                </p>
                <button className={classes["cart-item-remove-btn"]} onClick={props.onDelete} >
                Xóa khỏi giỏ
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