import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Alternate from './Alternate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar /> */}

      <Alternate />

      {/* <Sidebar /> */}
    </div>
  )
}

export default App
