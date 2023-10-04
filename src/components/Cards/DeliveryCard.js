import "./DeliveryCard.css";

 const DeliveryCard = ({img, name,text})=>{

    return(
        <>
        <div className="homecard  text-center ">
            <img src={img} height="150px" alt="del-img"/>
            <h4 className="shop-text ps-3 ">{name}</h4>
            <p className=" p-2 ps-5 pe-5 text-secondary">{text}</p>
        </div>
        </> 
        
    )
}
export default  DeliveryCard;
