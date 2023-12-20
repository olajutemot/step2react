import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setSteps] = useState(1);
  const [close, setClose] = useState(true);
  const handlePrev = () => {
    if (step > 1) {
      setSteps(step - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setSteps(step + 1);
    }
  };
  const handleClose = () => {
    setClose((current) => !current);
  };
  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times
      </button>
      {close && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step{step} : {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
