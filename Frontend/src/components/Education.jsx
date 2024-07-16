import Container from "./container";
import image from "../assets/academics.png";

function Education() {
  return (
   <>
   <h1>Education</h1>
    <div className="academics">
      
      <Container
        role="Developer"
        heading="Accadmics"
        paragraph=" I have completed my Diploma in ME from RCE. I am currently pursuing my B.Tech in CSE from phonics group of institutions."
    />
    <div className="image">
      <img src={image} alt="education" />
    </div>
    </div>
   </>
  );
}

export default Education;