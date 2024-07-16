import webImage from '../assets/123.png';

function HeroSection() {
  return (

    <>
    <div className="hero-section">
        <div className='hero-img'>
            <img src={webImage} alt='webImage'/>
        </div>
        <div className='hero-text'>
            {/* <h1>MERN STACK</h1>
            <div className="my-name"><p>Hey!</p>
            <p>I'm <span>Amar jha</span></p>
            </div> */}
            <h1>DEVELOPER</h1>
        </div>
        {/* <h1 className='hero-text'>DEVELOPER</h1> */}
       
    </div>
     
    </>
  );
}

export default HeroSection;