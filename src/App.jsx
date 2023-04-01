import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="h-[95%] w-[90%] lg:h-[75%] lg:w-[60%] text-center">
        <p className="font-[400] text-[2rem] lg:text-[5rem]">
          {" "}
          Shortify My <span className="text-[#ffb83a]"> URL( )</span>
        </p>
        <div className="mt-[4rem] lg:mt-6 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
          <p className="w-[100%] lg:w-[60%] h-[2rem] flex">
            <span className="h-[2rem] w-[2rem] p-2 bg-black rounded-l-[0.45rem]">
              <img className="w-[100%] h-[100%]" src="/image/link.png" />
            </span>
            <input
              className="w-[100%] lg:w-[85%] p-2 rounded-r-[0.45rem]"
              type="text"
              placeholder="paste link or URL here..."
            />
          </p>
          <button className="w-[100%] lg:p-2 lg:w-[4.5rem] bg-black text-[#ffb83a] hover:bg-[#ffb83a] hover:text-[white] rounded-[0.45rem] p-1">
            Shortify
          </button>
        </div>
        <div className="lg:flex hidden items-center my-4">
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
        <div className="flex lg:hidden items-center my-8">
          <span>--------------------</span>{" "}
          <img
            className="h-[2rem] w-[2rem]"
            src="/image/scissors2.svg"
            alt=""
          />
          <span>--------------------</span>
        </div>
        <div className=" lg:mt-6 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
          <p className="w-[100%] lg:w-[60%] h-[2rem] flex">
            <span className="h-[2rem] w-[2rem] p-2 bg-[#ffb83a] rounded-l-[0.45rem]">
              <img className="w-[100%] h-[100%]" src="/image/copyy.png" />
            </span>
            <p className="w-[100%] p-2 bg-white rounded-r-[0.45rem]"></p>
          </p>
          <button className="w-[100%] lg:p-2 lg:w-[4.5rem] hover:bg-black hover:text-[#ffb83a] bg-[#ffb83a] text-[white] rounded-[0.45rem] p-1">
            Copy
          </button>
        </div>
        <ul className="lg:p-0 p-3 text-left mt-10 list-disc flex flex-col gap-3 text-[#616161]">
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
