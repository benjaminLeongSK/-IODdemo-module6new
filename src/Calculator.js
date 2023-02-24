import { useState } from "react";

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [answer, setAnswer] = useState('');

    const handleCalculate = () => {
        if(operator === "+") {
            setAnswer(parseInt(firstNumber) + parseInt(secondNumber));
        } else if (operator === "-") {
            setAnswer(parseInt(firstNumber) - parseInt(secondNumber));
        } else if (operator === "/") {
            setAnswer(parseInt(firstNumber) / parseInt(secondNumber));
        } else if (operator === "*") {
            setAnswer(parseInt(firstNumber) * parseInt(secondNumber));
        } else {
            setAnswer("WARNING!! Operator is not valid, input '+', '-', '/' or '*'")
        }
    }

    return ( 
        <>
            <h2>Caculator Calculates</h2>
            <label>1st Number:</label>
            <input 
                type="number" 
                required
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />
            <label>Choose your operator</label>
            <input 
                type="text"
                required
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
            />
            <label>2nd Number:</label>
            <input 
                type="number" 
                required
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />
            <button onClick={handleCalculate}>Click to Calculate</button>
            <h1>Your answer is: {answer}</h1>
        </>
     );
}
 
export default Calculator;