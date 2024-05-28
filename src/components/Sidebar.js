import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../images/pdp.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const activeIconColor = 'text-sky-400';
  const defaultIconColor = 'text-gray-500';

  const links = [
    { to: '/', icon: faHome, label: 'Home' },
    { to: '/about', icon: faUser, label: 'About' },
    { to: '/projects', icon: faProjectDiagram, label: 'Projects' },
    { to: '/articles', icon: faNewspaper, label: 'Articles' },
    { to: '/contact', icon: faEnvelope, label: 'Contact' }
  ];

  return (
    <div className={`w-48 h-full shadow-md bg-sidebar-bg fixed flex flex-col items-center px-2 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:block hidden`}>
      <div className="flex items-center w-full p-3 mt-6">
        <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full"/>
        <div className="ml-2 text-custom">
          <h1 className="text-sm font-bold">Anwar Allal</h1>
          <p className="text-gray-700 text-l">Developer</p>
        </div>
      </div>
      <ul className="w-full text-custom mt-16 px-3 flex-grow mb-96">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={link.to}
              end
              className={`flex items-center px-4 py-2 rounded-lg ${activeIndex === index ? 'bg-white shadow-2xl -translate-y-1' : 'bg-transparent'} transition-all duration-300 ease-in-out w-full`}
              activeClassName="bg-white shadow-2xl -translate-y-1"
              onClick={() => setActiveIndex(index)}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className={`mr-2 fa-xs ${activeIndex === index ? activeIconColor : defaultIconColor}`}
              />
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="w-full mt-auto mb-4 px-4">
        <h2 className="text-sm font-semibold mb-2">Socials</h2>
        <ul>
          <li className="mb-2">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-sky-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              Twitter
            </a>
          </li>
          <li className="mb-2">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-sky-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
          </li>
          <li className="mb-2">
            <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-sky-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faYoutube} className="mr-2" />
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
