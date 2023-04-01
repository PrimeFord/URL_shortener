import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputLink from "./Components/InputLink";
import CutLine from "./Components/CutLine";
import ResultLink from "./Components/ResultLink";
import Instruction from "./Components/Instruction";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="h-[95%] w-[90%] lg:h-[75%] lg:w-[60%] text-center">
        <InputLink setInputValue={setInputValue} />
        <CutLine />
        <ResultLink inputValue={inputValue} />
        <Instruction />
      </div>
    </div>
  );
}

export default App;
