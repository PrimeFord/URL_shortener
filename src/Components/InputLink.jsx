import React, { useState } from "react";
import Load from "./Load";

const InputLink = ({ setInputValue, error }) => {
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(false);
  const [empty, setEmpty] = useState("");

  const shortify = (e) => {
    e.preventDefault();

    console.log(value);
    setInputValue(value);
    if (value.trim().length !== 0) {
      setEmpty("");
      console.log("not");
    } else {
      setEmpty("Please enter an address in this field");
      console.log("empty");
    }
    setLoad(true);
  };
  return (
    <div className="w-[100%] mt-8 lg:mt-0">
      <p className="font-[400] text-[2rem] lg:text-[5rem]">
        {" "}
        Shortify My <span className="text-[#ffb83a]"> URL( )</span>
      </p>
      <form
        action=""
        className="w-[100%] mt-[4rem] lg:mt-6 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0"
        onSubmit={shortify}
      >
        <p className="w-[100%] lg:w-[60%] h-[2rem] flex">
          <span className="h-[2rem] w-[2rem] p-2 bg-black rounded-l-[0.45rem]">
            <img className="w-[100%] h-[100%]" src="/image/link.png" />
          </span>
          <input
            className="w-[100%] lg:w-[85%] p-2 rounded-r-[0.45rem]"
            type="text"
            placeholder="paste link or URL here..."
            // required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </p>
        <button className="w-[100%] lg:p-2 lg:w-[4.5rem] bg-black text-[#ffb83a] hover:bg-[#ffb83a] hover:text-[white] rounded-[0.45rem] p-1">
          Shortify
        </button>
      </form>
      <p className="text-[#f53434f1] lg:text-left lg:ml-[10rem]">{empty}</p>
      <p className="text-[#f53434f1] lg:text-left lg:ml-[10rem]">{error}</p>
    </div>
  );
};

export default InputLink;
