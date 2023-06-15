import { Fragment, useContext } from "react";
import classes from "./Nav.module.css"
import CartContext from "../store/Cart-context";
import {Link} from 'react-router-dom';

const Nav = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0)

    return(
        <Fragment>
<nav style={{ backgroundColor: "#563d7c" }} className="navbar navbar-expand-lg navbar-dark sticky-top">
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">

  <ul className="navbar-nav mr-auto ">
    <li className="nav-item active">
      <div className="nav-link active" >
        Trang chủ
      </div>
    </li>
    <li className="nav-item">
      <div className="nav-link" >
        Flash Sale
      </div>
    </li>
    <li className="nav-item">
      <div className="nav-link" >
        Nổi bật
      </div>
    </li>
    <li className="nav-item">
      <div className="nav-link" >
        About Us
      </div>
    </li>
    <li className="nav-item" onClick={props.onClick}>
      <button className=" nav-link btn">
        <span className={classes.cart} >
          <i className="fa fa-shopping-cart " aria-hidden="true" />
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </li>
  </ul>
  
    <div className="form-inline my-2 my-lg-0">
     
      <button className="btn btn-success my-2 my-sm-0 mr-2" onClick={props.onOpen}>
        Thêm sản phẩm
      </button>
      <Link to="/table">
        <button className="btn btn-danger my-2 my-sm-0">
          Sửa/Xóa sản phẩm
        </button>
      </Link>
    </div>
  </div>
</nav>
  </Fragment>

    );
};

export default Nav;