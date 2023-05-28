import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />

     <Hero />

     <Sidebar />

     <Submenu />

    </>
  )
}

export default App
