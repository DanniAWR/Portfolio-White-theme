import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectImage from '../images/ascent.png'; // Assurez-vous d'ajouter l'image de votre projet ici
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/node.png';

const projects = [
  {
    title: "Ascent Technologies",
    description: "I created a website to sell my full-stack development services where you will find all the information about my services.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript/JSON"],
    image: projectImage,
    link: "/projects/ascent-technologies" // Ajoutez un lien vers la page du projet
  },
  {
    title: "Portfolio",
    description: "I created a website to sell my full-stack development services where you will find all the information about my services.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript/JSON"],
    image: projectImage,
    link: "/projects/ascent-technologies" // Ajoutez un lien vers la page du projet
  },
  // Ajoutez plus de projets ici si nécessaire
];

const Home = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    projects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjects((prev) => {
          // Check if the project is already in the visibleProjects array
          if (!prev.some(p => p.title === project.title)) {
            return [...prev, project];
          }
          return prev;
        });
      }, index * 200); // 500ms delay between each project
    });
  }, []);

  return (
    <div className="flex items-start justify-center min-h-screen pt-20 ml-38">
      <div className="text-left max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-600">
          <span role="img" aria-label="wave" className="mr-2">👋</span>
          Hello there! I'm Anwar
        </h1>
        <p className="text-s mb-2 text-gray-600">
          I'm a full-stack developer that loves <span className="bg-gray-100 px-1 rounded text-gray-500">building products</span> and web apps that can impact millions of lives.
        </p>
        <p className="text-s text-gray-600 mb-14">
          I'm a senior software engineer with <span className="bg-gray-100 px-1 rounded text-gray-500">7 years of experience</span> building scalable web apps that are performance optimized and good looking.
        </p>

        <div className="text-left mb-14 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-600">What I'm currently working on</h2>
          {visibleProjects.map((project, index) => (
            <Link key={index} to={project.link} className="block p-4 rounded hover:bg-gray-100 transition duration-300 animate-slideIn mt-4">
              <div className="mb-4">
                <img src={project.image} alt="Current Project" className="w-1/3 h-auto rounded" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="text-sm text-gray-600">
                <span className="mr-2">Technologies used:</span>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 px-2 py-1 rounded text-gray-500 ml-2">{tech}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-left max-w-2xl mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-600">Tech Stack</h2>
          <div className="flex flex-wrap">
            <img src={logo1} alt="Technology Logo 1" className="w-14 h-10 mr-4 mb-4" />
            <img src={logo2} alt="Technology Logo 2" className="w-6 h-9 mr-4 mb-4" />
            <img src={logo3} alt="Technology Logo 3" className="w-14 h-10 mr-4 mb-4" />
          </div>
        </div>
        
        <div className="w-full bg-white py-2">
          <footer className="w-full bg-white text-gray-500 text-center">
            <p>&copy; {new Date().getFullYear()} Anwar Allal. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
