import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./components/Data";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if(index < 0) {
  //     setIndex(lastIndex)
  //   }

  //   if(index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index]);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 50000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // More stuff coming up
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        {/* <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiFillLeftCircle />
        </button> */}

        <button className="prev" onClick={prevSlide}>
          <AiFillLeftCircle />
        </button>

        {/* <button className="next" onClick={() => setIndex(index + 1)}>
          <AiFillRightCircle />
        </button> */}

        <button className="next" onClick={nextSlide}>
          <AiFillRightCircle />
        </button>
      </div>
    </section>
  );
}

export default App;
