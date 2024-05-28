// src/pages/About.js
import React, { useState } from 'react';
import '../App.css';
import logo1 from '../images/image3.png';
import logo2 from '../images/image1.png';
import { CSSTransition } from 'react-transition-group';

const About = () => {
  const [showImages, setShowImages] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
  };
  return (
    
    <div className="flex items-start justify-center min-h-screen pt-20 ml-38">
      
      <div className="text-left max-w-2xl">
      

        <span role="img" aria-label="wave" className=" text-4xl mr-2">💬</span>

        <h1 className="text-3xl font-bold mb-12 text-gray-600">
          About Me
        </h1>
        <div style={{ display: 'flex' }}>
          <CSSTransition
            in={true}
            timeout={500}
            classNames="slide-down"
            unmountOnExit
          >
            <img
              src={logo1}
              alt="Technology Logo 1"
              className="img-deformed2" style={{ width: '160px', marginRight: '70px' }} // Utilisation de la classe CSS pour l'effet
            />
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={500}
            classNames="slide-down"
            unmountOnExit
          >
            <img
              src={logo2}
              alt="Technology Logo 1"
              className="img-deformed" style={{ width: '160px' }} // Utilisation de la classe CSS pour l'effet
            />
          </CSSTransition>
        </div>
        <p className="text-s mb-2 mt-6 text-gray-600">
        Hello, my name is Anwar Allal, a passionate developer, a committed writer, and a lover of exceptional designs. Welcome to my digital universe!
        </p>
        <p className="text-s mb-2 text-gray-600">
        From the beginning of my journey, I have been captivated by the art of creating impactful digital experiences. As a developer, I enjoy turning lines of code into functional and elegant solutions. My goal is not just to build software, but to create digital wonders that seamlessly merge form and function.
        </p>
        <p className="text-s mb-2 text-gray-600">
        But my journey doesn’t stop at coding. With a heart full of words and a mind brimming with ideas, I have ventured into the realm of writing. From technical articles that unveil complex concepts to creative narratives that spark the imagination, I weave words to inform, entertain, and inspire.
        </p>
        <p className="text-s mb-2 text-gray-600">
        What sets me apart is my unwavering appreciation for design. I believe that aesthetics and usability go hand in hand. My sense of great design ensures that every project I undertake not only works perfectly under the hood but also looks stunning on the surface.
        </p>
        <p className="text-s mb-2 text-gray-600">
        Through this website, my aim is to share with you my ideas, experiences, and creations. Whether you are a fellow developer looking for solutions, a fellow writer in search of inspiration, or simply someone who appreciates the finer aspects of design, there is something here for you.
        </p>
        <p className="text-s mb-2 text-gray-600">
        Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can explore the limitless possibilities of technology and storytelling while delighting in the beauty of thoughtful design.
        </p>
        <p className="text-s text-gray-600 mb-14">
        Thank you for being here, and I look forward to embarking on this adventure with you.
        </p>

        <div className="w-full bg-white py-2">
          <footer className="w-full bg-white text-gray-500 text-center">
            <p>&copy; {new Date().getFullYear()} Anwar Allal. All rights reserved.</p>
          </footer>
        </div>
        
      </div>
    </div>
  );
};

export default About;