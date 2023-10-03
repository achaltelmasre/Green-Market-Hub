import "./AboutCard.css"


export default function AboutCard(props){
   const {name, education} = props ;
    return(
      <div className="card">
        <h2>Name : {name} </h2>
        <h4>Education : {education}</h4>

       
      </div>
    )
  }
