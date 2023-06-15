import { useContext } from "react";
import CartContext from "../store/Cart-context";

const Card = (props) =>{
  var nf = new Intl.NumberFormat();
  const cartCtx = useContext(CartContext);
  const addToCartHandler=() =>{
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      price: props.price,
      amount: 1,
      image: props.image,
    })
  }

  const submitHandler = event =>{
    event.preventDefault();
    addToCartHandler();
  }

    return(
        <div className="col-xl-3 col-lg-5 col-md-8 mx-4 my-2">
        <div className="card" >
  <img className="card-img-top" src={props.image} alt="product" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text text-danger h5" >
      {nf.format(props.price)} đ
    </p>
    <form onSubmit={submitHandler} id={props.id}>
      <button className="btn btn-primary" ><i class="fa fa-cart-plus" aria-hidden="true"></i> Thêm vào giỏ</button>
    </form>
  </div>
</div>

      </div>
    )
}

export default Card