import "./AboutCard.css";


export default function AboutCard(props) {
  const { name, education,Img, tag,linkedInLink,githubLink,instaLink } = props;
  return (
    <div className="card ">
      <img src={Img} className="our-img mb-1"/>
      <h4> {name} </h4> 
      <h5 className="tag">{tag}</h5>
      <h5>Education : {education}</h5>
      <span className="social-icon  ms-3">
      <a href={linkedInLink}><i class="fa-brands fa-linkedin"></i></a>
      <a href={githubLink}><i class="fa-brands fa-github"></i></a>
      <a href={instaLink}><i class="fa-brands fa-instagram"></i></a>

        
      </span>
    </div>
  )
}
