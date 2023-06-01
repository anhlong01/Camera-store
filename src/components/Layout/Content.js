import Card from "../UI/Card";


const Content = props =>{
    const data = props.array;
    return(
        <div className="col">
            <div className="row">
                {data.map((values)=>(
                    <Card 
                    key={values.id} 
                    title={values.title} 
                    image={values.img} 
                    price={values.price} 
                    id={values.id}
                    />
                    ))}
            </div>
        </div>
    )
}

export default Content