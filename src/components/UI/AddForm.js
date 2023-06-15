import Modal from "./Modal"
import classes from "../Cart/Cart.module.css";
import { useState } from "react";
import productsService from "../../services/products-service";


const AddForm =(props) =>{

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('camera');
    const [message, setMessage] = useState({error: false, msg: ""});

    const addHandler = async (e) =>{
        e.preventDefault();
        if (title === ''|| price==='' || image===''){
            setMessage({error: true, msg: "Không được để trống thông tin"});
            return;
        }   

        const newProduct = {
            title,
            price,
            category,
            image
        }
        try{
            await new productsService().addProduct(newProduct);
            setMessage({error: false, msg: "Thêm sản phẩm thành công!"});

        }catch(e){
            setMessage({error: true, msg: e.message})
        }
      };

    return(
        <Modal onClose={props.onClose}>
        
        <div className="card-body p-4"> 
           <button className={classes['cart-close']} onClick={props.onClose}>
                <i className="fas fa-times" />
            </button>
            <p className="h1 align-items-center px-2 mb-4 text-info text-center">Nhập thông tin sản phẩm</p>
            <form className="px-2" onSubmit={addHandler}>
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
                        value="camera" 
                        checked="true"
                        onClick={(e) => setCategory('camera')}
                        ></input>
                        <label className="form-check-label">Camera</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" name="category" 
                        value="computer"
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
                        <button className="btn btn-lg btn-primary">Thêm</button>
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
        
        </Modal>
    )
}

export default AddForm