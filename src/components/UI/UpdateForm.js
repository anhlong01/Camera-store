import classes from "../Cart/Cart.module.css";
import { useState } from "react";
import productsService from "../../services/products-service";

const UpdateForm =(props) =>{
    const product = props.product;
    console.log(product);
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);
    const [category, setCategory] = useState(product.category);
    const [message, setMessage] = useState({error: false, msg: ""});

    const updateHandler = async (e) =>{
        e.preventDefault();
        if (title === ''|| price==='' || image===''){
            setMessage({error: true, msg: "Không được để trống thông tin"});
            return;
        }   

        const updatedProduct = {
            title,
            price,
            category,
            image
        }
        try{
            await new productsService().updateProduct(product.id, updatedProduct);
            setMessage({error: false, msg: "Sửa sản phẩm thành công!"});

        }catch(e){
            setMessage({error: true, msg: e.message})
        }
      };

    return(  
        <div className={classes.modal} >
        <div className="card-body p-4"> 
           <button className={classes['cart-close']} onClick={props.onClose}>
                <i className="fas fa-times" />
            </button>
            <p className="h1 align-items-center px-2 mb-4 text-info text-center">Nhập thông tin sản phẩm</p>
            <form className="px-2" onSubmit={updateHandler}>
                <div className="form-group ">
                    <h6>Tên sản phẩm</h6>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group ">
                    <h6>Giá sản phẩm</h6>
                    <input 
                    type="number" 
                    className="form-control" 
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value, 10))}
                    />
                </div>
                <div className="form-group ">
                    <h6>Loại hàng</h6>
                    <div className="form-check form-check-inline mr-5">
                        <input 
                        className="form-check-input" 
                        type="radio" name="category" 
                        checked={category==='camera'? true:false}
                        onClick={(e) => setCategory('camera')}
                        ></input>
                        <label className="form-check-label">Camera</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" name="category" 
                        checked={category==='computer'? true:false}
                        onClick={(e) => setCategory('computer')}
                        ></input>
                        <label className="form-check-label">Máy tính</label>
                    </div>
                </div>
                <div className="form-group ">
                    <h6>Hình ảnh (nhập link ảnh)</h6>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="image"
                    value={image}
                    onChange={(e) =>{setImage(e.target.value)}}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <button className="btn btn-lg btn-primary">Sửa</button>
                    </div>
                    <div className="col-lg-10">
                    {message?.msg && 
                    (<div className={message?.error? "alert alert-danger" : "alert alert-success"} role="alert">
                        {message?.msg}
                    </div>)}
                    </div>
                    
                </div>
                   
                
                    
              </form>
            </div>
        </div>
        
    )
}

export default UpdateForm