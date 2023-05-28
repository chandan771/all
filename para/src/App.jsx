import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./Data";





function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Mash");
    // console.log(typeof count);
    let amount = parseInt(count)
    // console.log(amount);
    if(count <= 0) {
      amount = 1
    }

    if(count > 50) {
      amount = 50
    }
    setText(data.slice(0, amount))
  };



  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>

        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </article>
    </section>
  );
}

export default App;
