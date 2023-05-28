import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Review from './review/Review'


function App() {

  

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
      {/* // above the section is from reviews */}
    </main>
  )
}

export default App
