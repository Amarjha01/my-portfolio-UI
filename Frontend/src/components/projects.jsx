import Container from "./container";
import toolImage from "../assets/tools.png";


function Projects() {
    return (
        <>
        
        <div className="projects">
        <Container
        role="Developer"
        heading="Project 1"
        paragraph="Here are some of my projects. Click on the arrow to view more details."
        tools={<img src={toolImage} alt="Tool" className="tool-image" />}
    />
        <Container
        role="Developer"
        heading="Project 2"
        paragraph="Here are some of my projects. Click on the arrow to view more details."
    />
        <Container
        role="Developer"
        heading="Project 3"
        paragraph="Here are some of my projects. Click on the arrow to view more details."
    />
     
        </div>
      
    
    </>
       
    );
}

export default Projects;