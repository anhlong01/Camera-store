import Card from "../UI/Card";

const Content = props =>{
    const data = props.array;
        if(data.length === 0){
            return(
                <div className="d-flex col align-items-center justify-content-center">
                        <h1 >Xin lỗi, Không có sản phẩm phù hợp với yêu cầu của bạn</h1>
                </div>
            ) 
        } else{
            return(
        <div className="col">
            <div className="row">
                {data.map((values)=>(
                    <Card 
                    key={values.id} 
                    title={values.title} 
                    image={values.image} 
                    price={values.price} 
                    id={values.id}
                    />
                    ))}
            </div>
        </div>
    )
}
}

export default Content