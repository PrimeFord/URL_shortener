import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="h-[75%] w-[60%] text-center">
        <p className="font-[400] text-[5rem]">
          {" "}
          Shortify My <span className="text-[#ffb83a]"> URL( )</span>
        </p>
        <div className="flex justify-center mt-6 items-center">
          <p className="w-[60%] h-[2rem] flex">
            <span className="h-[2rem] w-[2rem] p-2 bg-black rounded-l-[0.45rem]">
              <img className="w-[100%] h-[100%]" src="/image/link.png" />
            </span>
            <input
              className="w-[85%] p-2 rounded-r-[0.45rem]"
              type="text"
              placeholder="paste link or URL here..."
            />
          </p>
          <button className="w-[4.5rem] bg-black text-[#ffb83a] hover:bg-[#ffb83a] hover:text-[white] rounded-[0.45rem] p-2">
            Shortify
          </button>
        </div>
        <div className="flex items-center my-4">
          <span>
            ----------------------------------------------------------
          </span>{" "}
          <img
            className="h-[2rem] w-[2rem]"
            src="/image/scissors2.svg"
            alt=""
          />
          <span>
            ----------------------------------------------------------
          </span>
        </div>
        <div className="flex justify-center mt-6 items-center">
          <p className="w-[60%] h-[2rem] flex">
            <span className="h-[2rem] w-[2rem] p-2 bg-[#ffb83a] rounded-l-[0.45rem]">
              <img className="w-[100%] h-[100%]" src="/image/copyy.png" />
            </span>
            <p className="w-[85%] p-2 bg-white rounded-r-[0.45rem]"></p>
          </p>
          <button className="w-[4.5rem] hover:bg-black hover:text-[#ffb83a] bg-[#ffb83a] text-[white] rounded-[0.45rem] p-2">
            Copy
          </button>
        </div>
        <ul className="text-left mt-10 list-disc flex flex-col gap-3 text-[#616161]">
          <li>
            Paste the link to be truncated or shortened in the input field.
          </li>
          <li>Clik the Shortify button.</li>
          <li>Copy the link generated in the paragraph field.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
