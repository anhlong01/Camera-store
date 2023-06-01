import { Fragment, useContext } from "react";
import classes from "./Nav.module.css"
import CartContext from "../store/Cart-context";

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
      <a className="nav-link active" href="#home">
        Trang chủ
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#fsale">
        Flash Sale
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#hot">
        Nổi bật
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#aboutus">
        About Us
      </a>
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
  
    <form className="form-inline my-2 my-lg-0">
     
      <button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">
        Đăng ký
      </button>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
        Đăng nhập
      </button>
    </form>
  </div>
</nav>
  </Fragment>

    );
};

export default Nav;