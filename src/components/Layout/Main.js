import Left from "./Left"
import Content from "./Content"
import useProducts from "../store/useProducts"
import { useEffect, useState } from "react"

const Main = ()=>{
    const products = useProducts();
    const [data, setState] = useState(products);
    useEffect(()=>{setState(products)},[products]);

    const filterPrice = (price)=>{
        const result = products.filter((curData)=>{
            return curData.price <= price*1000000;
        });
        setState(result);
    }
    
    const filterCategory = (category)=>{
        const result = products.filter((curData)=>{
            return curData.category === category;
        });
        setState(result);      
    }

 
    // console.log(data);
    return(
        <div className="row  my-4 mx-2">
        <Left 
        filterCom ={() => filterCategory('computer')}
        filterCam ={() => filterCategory('camera')}
        onSlider = {filterPrice}
        />
        <Content array={data}/>
        
        </div>
       
    )
}

export default Main