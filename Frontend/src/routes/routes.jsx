import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx';
import Blog from '../pages/Blog.jsx';
import Projects from '../pages/Projects.jsx';
import Services from '../pages/Services.jsx';
import Help from '../pages/Help.jsx';
import App from '../App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Blog',
        element: <Blog />
      },
      {
        path: 'Projects',
        element: <Projects />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'Services',
        element: <Services />
      },
      {
        path: 'Help',
        element: <Help />
      },
    ],
  },
]);

export default router;
