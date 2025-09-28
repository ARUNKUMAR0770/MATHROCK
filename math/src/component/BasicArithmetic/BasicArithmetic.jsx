import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { XCircle } from 'lucide-react';



const BasicArithmetic = () => {
    const operation = ["Addition", "Subtraction", "Multiplication", "Division"];
    const [showQuiz, setShowQuiz] = useState(true);
    const [operationType, setOperationType] = useState("");
    const [Number1, setNumber1] = useState(0);
    const [Number2, setNumber2] = useState(0);
    const [operator, setOperator] = useState("");
    const [answer, setAnswer] = useState(0);
    const [options, setOptions] = useState([]);
    const [result, setResult] = useState("");
    // setting
    const [showSetting, setShowSetting] = useState(false);

    // When user selects operation
    function handleClick(item) {
        setShowQuiz(false);
        setOperationType(item);
        generateQuestion(item);
    }

    // Generate a new question
    function generateQuestion(type) {
        const n1 = Math.floor(Math.random() * 10);
        const n2 = Math.floor(Math.random() * 10) || 1; // avoid /0
        let op = "";
        let ans = 0;

        switch (type) {
            case "Addition":
                op = "+";
                ans = n1 + n2;
                break;
            case "Subtraction":
                op = "-";
                ans = n1 - n2;
                break;
            case "Multiplication":
                op = "×";
                ans = n1 * n2;
                break;
            case "Division":
                op = "÷";
                ans = parseFloat((n1 / n2).toFixed(2));
                break;
            default:
                break;
        }

        setNumber1(n1);
        setNumber2(n2);
        setOperator(op);
        setAnswer(ans);

        generateOption(ans);
    }

    // Generate options with random incorrect answers
    function generateOption(correctAnswer) {
        const opts = [correctAnswer];
        while (opts.length < 4) {
            let option = correctAnswer + Math.floor(Math.random() * 10 - 5);
            if (!opts.includes(option)) {
                opts.push(option);
            }
        }
        const shuffled = opts.sort(() => Math.random() - 0.5);
        setOptions(shuffled);
    }

    // Handle answer click
    function handleAnswer(option) {
        if (option === answer) {
            setResult("Correct Answer");
        } else {
            setResult("Wrong Answer");
        }

        // Hide result after 2 seconds
        setTimeout(() => setResult(""), 1000);

        // Generate next question after 2 seconds
        setTimeout(() => generateQuestion(operationType), 1000);
    }

    return (
        <>
            {showQuiz ? (
                <div className="custom_grid_1 p-4">
                    {operation.map((item, index) => (
                        <div
                            key={index}
                            className="box"
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white w-screen h-[calc(100vh-60px)] font-poppins text-xl text-black flex flex-col gap-4 items-center justify-center">
                    <div className="text-3xl font-bold">{operationType}</div>
                    <p className="text-2xl">
                        {Number1} {operator} {Number2}
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {options.map((option, index) => (
                            <button
                                className="option px-4 py-2 border rounded hover:bg-gray-200"
                                onClick={() => handleAnswer(option)}
                                key={index}
                            >
                                {option}
                            </button>
                        ))}
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
                    <Settings color="black" className='absolute top-18 right-2 text-white cursor-pointer hover:rotate-90 transition-all duration-300' onClick={() => { setShowSetting(!showSetting) }} />

                    <div className={`fixed top-0 right-0 h-screen w-[250px] bg-black transform transition-transform duration-500 ease-in-out z-50 ${showSetting ? "translate-x-0" : "translate-x-full"
                        }`}>
                        <div className="flex p-2 items-center justify-between">
                            <h1 className='text-white'>Change Setting</h1>
                            <XCircle size={24} color="red" onClick={() => setShowSetting(false)} className=' top-4 right-4 cursor-pointer hover:rotate-90 transition-all duration-300 ' />
                        </div>

                    </div>


                </div>
            )}

        </>
    );
};

export default BasicArithmetic;
