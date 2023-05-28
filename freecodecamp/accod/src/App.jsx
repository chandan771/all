import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./components/Data";
import SingleQuestion from "./components/Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Reality & Truth of the Human World</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question} />
            );
            
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
