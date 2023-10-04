import "./HomeCard.css"

 const HomeCard = ({img, name})=>{

    return(
        <>
        <div className=" text-center p-2">
            <img src={img} height="250px" alt='veg-img'/>
            <h4 className="name p-3">{name}</h4>
        </div>
        </> 
    )
}
export default  HomeCard;
