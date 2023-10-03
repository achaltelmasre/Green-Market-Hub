

 const HomeCard = ({img, name,text})=>{

    return(
        <>
        <div className="home-card text-center p-2">
            <img src={img} height="100px" alt="del-img"/>
            <h4 className="name p-3 text-success">{name}</h4>
            <p className="name p-5 ms-3 me-3 text-secondary">{text}</p>
        </div>
        </> 
    )
}
export default  HomeCard;
