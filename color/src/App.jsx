import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Values from 'values.js'
import SingleColor from './SingleColor'



function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // const [list, setList] = useState([]);


  const [list, setList] = useState(new Values('#EB984E').all(10));

  // const [list, setList] = useState(new Values('#EB984E').all(20));

  // const [list, setList] = useState(new Values('#EB984E').all(1));




  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Color');
    try {
       let colors = new Values(color).all(10)
      //  console.log(colors);
      setList(colors)
    }catch (error) {
         setError(true)
         console.log(error)
    }
    
  }

  return (
    <>
    <section className='container'>
       <h3>Color Generator</h3>
       <form onSubmit={handleSubmit}>
          <input 
           type="text" 
           value={color}
           onChange={(e) => setColor(e.target.value)}
           placeholder='#F5B041'
           className={`${error ? 'error' : null}`}
          />

          <button className='btn' type='submit'>
            submit
          </button>
       </form>
    </section>

    <section className='colors'>
     {list.map((color, index) => {
      // console.log(color);
       return (
        <SingleColor 
         key={index}
         {...color}
         index={index}
         hexColor={color.hex}
        ></SingleColor>
       )
     })}
    </section>

    </>
  )
}

export default App
