import React, { useState } from 'react';
import problemsData from './NumProp.json';

const topics = [
  "Numbers & Properties",
  "Variables & Expressions",
  "Linear Equations",
  "Quadratic Equations",
  "Higher-Order Polynomials",
  "Inequalities",
  "Polynomials (Operations)",
  "Factoring",
  "Functions",
  "Graphing",
  "Systems of Equations",
  "Word Problems"
];

const ElementaryAlgebra = () => {
  const [showProblems, setShowProblems] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState("");

  function handleClick(item) {
    console.log(item);
    setSelectedTopic(item);
    setShowProblems(false);
  }
  function handleAnswer(value) {
    console.log(value);
    if(value.target.value === problemsData[questionNumber].answer){
      setResult("Correct Answer");
    } else {
      setResult("Wrong Answer");
    }
    const nextQuestion = questionNumber + 1;
    if(nextQuestion < problemsData.length){
       
      setTimeout(() => setQuestionNumber(nextQuestion), 2000);
     
    } else {
      alert("You have completed all the questions in this topic.");
      setShowProblems(true);
      setSelectedTopic(null);
      setQuestionNumber(0);
    }

    setTimeout(() => setResult(""), 2000);

    // Generate next question after 2 seconds
    setTimeout(() => generateQuestion(operationType), 2000);
  }

  return (
    <>
      {showProblems ? (
        <div className="box_grid">
          {topics.map((item, index) => (
            <div
              key={index}
              className="box p-2"
              onClick={() => handleClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-start pt-[70px] gap-4">
          {selectedTopic === "Numbers & Properties" && (
            <>
               <div className="bg-white w-screen h-[100vh] font-poppins text-xl text-black flex flex-col gap-6 items-center justify-center">
                    <div className="text-3xl font-bold">{selectedTopic}</div>
                    <p className="text-2xl">
                        {problemsData[questionNumber].question}
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                            <button className="option" value={problemsData[questionNumber].options[0]} onClick={(value) => {handleAnswer(value)}}>
                              {problemsData[questionNumber].options[0]}
                              </button>
                            <button className="option" value={problemsData[questionNumber].options[1]} onClick={(value) => {handleAnswer(value)}}>
                              {problemsData[questionNumber].options[1]}
                              </button>
                            <button className="option" value={problemsData[questionNumber].options[2]} onClick={(value) => {handleAnswer(value)}}>
                              {problemsData[questionNumber].options[2]}
                              </button>
                            <button className="option" value={problemsData[questionNumber].options[3]} onClick={(value) => {handleAnswer(value)}}>
                              {problemsData[questionNumber].options[3]}
                              </button>
                    </div>
                    <div className="h-2 w-screen flex items-center justify-center my-8">
                        {result && (
                            result.includes("Correct") ? (
                                <div className="true zoom-in-out-element ">{result}</div>

                            ) : result.includes("Wrong") ? (
                                <div className="false zoom-in-out-element ">{result}</div>
                            ) : null
                        )}
                    </div>
                </div>
            </>
          )}
          {selectedTopic === "Variables & Expressions" && (
            <>
              <h1 className="text-2xl font-bold">basic quiz on {selectedTopic}</h1>

            </>
          )}
          {selectedTopic === "Linear Equations" && (
            <>
              <h1 className="text-2xl font-bold">basic quiz on {selectedTopic}</h1>

            </>
          )}
          {selectedTopic === "Quadratic Equations" && (
            <>
              <h1 className="text-2xl font-bold">basic quiz on {selectedTopic}</h1>

            </>
          )}
          {selectedTopic === "Higher-Order Polynomials" && (
            <>
              <h1 className="text-2xl font-bold">basic quiz on {selectedTopic}</h1>

            </>
          )}
          {selectedTopic === "Inequalities" && (
            <>
              <h1 className="text-2xl font-bold">basic quiz on {selectedTopic}</h1>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ElementaryAlgebra;
