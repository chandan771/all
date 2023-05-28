import React from 'react'
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useGlobalContext } from './Context';


const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();  


  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>

      <button onClick={openModal} className='btn'>Show Modal</button>
    </main>
  )
}

export default Home;
