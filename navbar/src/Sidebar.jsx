import React from "react";
import { links, social } from "./Data";

const Sidebar = () => {
  return (
    <>
    <h4>Sidebar</h4>
      <div className="links-container show-container">
        <ul className="links">
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
    </>
  );
};

export default Sidebar;
