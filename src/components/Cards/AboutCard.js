import "./AboutCard.css"


export default function AboutCard(props) {
  const { name, education } = props;
  return (
    <div className="card">
      <h4>Name : {name} </h4>
      <h5>Education : {education}</h5>
      <span className="social-icon fs-2 ms-5">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-instagram"></i>
      </span>
    </div>
  )
}
