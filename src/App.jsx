import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputLink from "./Components/InputLink";
import CutLine from "./Components/CutLine";
import ResultLink from "./Components/ResultLink";
import Instruction from "./Components/Instruction";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="App">
      <div className="h-[95%] w-[90%] lg:h-[75%] mt-[4rem] lg:mt-0 lg:w-[60%] flex flex-col items-center text-center">
        <InputLink setInputValue={setInputValue} error={error} />
        <CutLine />
        <ResultLink inputValue={inputValue} setError={setError} />
        <Instruction />
      </div>
    </div>
  );
}

export default App;
