import "./DeliveryCard.css";

 const DeliveryCard = ({img, name,text})=>{

    return(
        <>
        <div className="homecard  text-center ">
            <img src={img} height="150px" alt="del-img"/>
            <h4 className="name ps-3 text-success">{name}</h4>
            <p className="name p-2 ps-5 pe-5 text-secondary">{text}</p>
        </div>
        </> 
        
    )
}
export default  DeliveryCard;
