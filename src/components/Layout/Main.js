import Left from "./Left"
import Content from "./Content"
import Categories from "../store/Categories"
import { useState } from "react"

const Main = ()=>{
    const[data, setState] = useState(Categories);
    const filterCategory = (category)=>{
        const result = Categories.filter((curData)=>{
            return curData.category === category;
        });
        setState(result);      
    }

    const filterPrice = (price)=>{
        const result = Categories.filter((curData)=>{
            return curData.price <= price*1000000;
        });
        setState(result);
    }

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