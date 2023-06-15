import useProducts from "../store/useProducts";
import classes from "./Table.module.css";
import CartProvider from "../store/CartProvider";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import productDataService from "../../services/products-service";
import { useState } from "react";
import UpdateForm from "./UpdateForm";

const Table = () =>{
  const [messsageIsShown, setMessageIsShown] = useState(false);
  

    var nf = new Intl.NumberFormat();
    const products = useProducts();
    const deleteHandler = async(id) =>{
      await new productDataService().deleteProduct(id);
      setMessageIsShown(true);
    }

    return(
      <CartProvider>
        <section style={{ backgroundColor: "#8fc4b7" }}>
  <div className=" py-5 h-100">
  <div className="row d-flex flex-column justify-content-center align-items-center">
  <div className="col-lg-12 col-xl-10">
    <div className="card rounded-3">
      <div className="column justify-content-center">
    <table className="table align-middle">
  <thead>
    <tr>
      <th scope="col"> </th>
      <th scope="col">Tên sản phẩm</th>
      <th scope="col">Giá </th>
      <th scope="col">Loại hàng</th>
      <th scope="col">Thao tác</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product)=>{
        return(
      <tr>
        <th scope="row"><img src={product.image} className={classes.image} alt='product'/></th>
        <td className={classes.name}>{product.title}</td>
        <td className={classes.price}>{nf.format(product.price)} đ</td>
        <td>
            <span className={ product.category==='computer'? "badge badge-success rounded-pill d-inline" : "badge badge-warning rounded-pill d-inline"}>
                {product.category}
            </span>
        </td>
        <td >
            <div className="row ">
                <div className="col-sm-3 col-xs-6">
                  <Popup 
                  trigger={<button className="btn btn-primary" >Sửa</button> } 
                  modal
                  >
                    {close=> <UpdateForm product={product} onClose={close}/>}
                  </Popup>                                   
                </div>          
                <div className="col-sm-3 col-xs-6">
                    <Popup
                    trigger={<button className="btn btn-danger">Xóa</button>}
                    modal
                    >
                      {close=>(
                        <>
                        <div className="modal-header">
                          <h5 className="modal-title">Xác nhận xóa</h5>
                          <button
                            type="button"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>Khi xóa sẽ không thể khôi phục, bạn có chắc không?</p>
                        </div>
                        <div className="modal-footer">
                          {messsageIsShown && <div className="alert alert-success" role="alert">
                            Xóa thành công
                          </div>}
                          <button type="button" className="btn btn-primary" onClick={close}>
                            Hủy
                          </button>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={(e) =>deleteHandler(product.id)}>
                            Xác nhận
                          </button>
                        </div>
                      </>
                      
                      )}
                    </Popup>
                </div>
            </div>
        </td>
      </tr>
    )})}   
  </tbody>
</table>
</div>
</div>
    </div>
  </div>
</div>
</section>
</CartProvider>
    )
}

export default Table;