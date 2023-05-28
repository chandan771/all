import React, { useEffect, useRef, useState } from "react";
import logo from "./assets/Logo.webp";
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { links, social } from "./Data";



const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);


  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }


  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}`;
    }else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);





  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>

        

        
          <div className='links-container' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {/* <li><a href='#'>Home</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Contact</a></li>
                  <li><a href='#'>Products</a></li> */}

              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        

        <ul className="social-icons">
          {/* <li><a href='https://www.facebook.com/'><FaFacebook /></a></li>
                    <li><a href='https://twitter.com/'><FaTwitter /></a></li>
                    <li><a href='https://www.instagram.com/'><FaInstagram /></a></li> */}

          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
