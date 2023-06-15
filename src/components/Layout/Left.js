 import classes from "./Left.module.css"
 import { useState } from "react";

 const Left = props =>{
    const [value, setValue] = useState(20);
    const [searchValue, setSearchValue] = useState('');

    const onSearch = (e) =>{
        const searchingValue = e.target.value;
        setSearchValue(searchingValue);
        props.onSearch(searchingValue);
    }

    var nf = new Intl.NumberFormat();
    const changeValue = (event) =>{
        const value = event.target.value
        setValue(value);
        props.onSlider(value);
    }
    return(
        <div className="col-sm-2 col-md-3 col-xl-2 border-right border-bottom position-relative">
            <div className="position-sticky">
            
                    <form className="align-items-center px-1 py-3">
                        <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search..."
                        value={searchValue}
                        onChange={onSearch}
                        />
                    </form>
                    <nav >
                        <article className="pb-3">
                        <h4>Loại hàng</h4>
                        <button className={classes["company-btn"]} onClick={props.showAll}>Tất cả</button>
                        <button className={classes["company-btn"]} onClick={props.filterCom}>Máy tính</button>
                        <button className={classes["company-btn"]} onClick={props.filterCam}>Camera</button>
                        </article>

                        <article className="pb-3">
                            <h4>Giá cả</h4>
                            <input
                            onChange={changeValue}
                            type="range"
                            className="price-filter"
                            min={0}
                            value={value}
                            max={100}
                            />
                            <p className={classes.price}>Giá: {nf.format(value*1000000)}đ  </p> 
                        </article>
                    </nav>
                    
              </div>
        </div>
    );
 };

 export default Left;