import React from 'react';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// library.add(fas);

import App from '../components/App.jsx';
import Navbar from '../components/Navbar.jsx';
import Herosection from '../components/Herosection.jsx';
import About from '../components/Aboutme.jsx';
import Projects from '../components/projects.jsx';
import Linegap from '../components/Linegap.jsx';
import Education from '../components/Education.jsx';

const Home = () => {
  return (
    <>
      <App />
      <Herosection />
      <About />
      <Linegap />
      <Linegap />
      <Projects />
      <Linegap />
      <Linegap />
      <Education />
    </>
  );
}

export default Home;
