import React, { useRef, useState } from "react";
import logo from "./assets/Logo.webp";
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { links, social } from "./Data";






const Alternate = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  };




  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />

          <div 
          className="links-container" 
          ref={linksContainerRef}
          style={linkStyles}
          >
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

          <button
            className="nav-toggle"
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Alternate;
