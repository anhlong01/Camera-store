import Left from "./Left"
import Content from "./Content"
import useProducts from "../store/useProducts"
import { useEffect, useState } from "react"

const Main = ()=>{
    const products = useProducts();
    const [data, setData] = useState(products);
    useEffect(()=>{setData(products)},[products]);

    const search = (value)=>{
        const result = products.filter((product)=>{
            return product.title.toLowerCase().includes(value);
        })
        setData(result);
    }

    const filterPrice = (price)=>{
        const result = products.filter((product)=>{
            return product.price <= price*1000000;
        });
        setData(result);
    }
    
    const filterCategory = (category)=>{
        const result = products.filter((product)=>{
            return product.category === category;
        });
        setData(result);      
    }

 
    // console.log(data);
    return(
        <div className="row  my-4 mx-2">
        <Left 
        onSearch = {search}
        showAll = {() => setData(products)}
        filterCom ={() => filterCategory('computer')}
        filterCam ={() => filterCategory('camera')}
        onSlider = {filterPrice}
        />
        <Content array={data}/>
        
        </div>
       
    )
}

export default Main