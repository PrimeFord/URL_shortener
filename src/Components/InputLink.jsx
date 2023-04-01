import React, { useState } from "react";

const InputLink = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const shortify = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="w-[100%] mt-8 lg:mt-0">
      <p className="font-[400] text-[2rem] lg:text-[5rem]">
        {" "}
        Shortify My <span className="text-[#ffb83a]"> URL( )</span>
      </p>
      <div className="w-[100%] mt-[4rem] lg:mt-6 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
        <p className="w-[100%] lg:w-[60%] h-[2rem] flex">
          <span className="h-[2rem] w-[2rem] p-2 bg-black rounded-l-[0.45rem]">
            <img className="w-[100%] h-[100%]" src="/image/link.png" />
          </span>
          <input
            className="w-[100%] lg:w-[85%] p-2 rounded-r-[0.45rem]"
            type="text"
            placeholder="paste link or URL here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </p>
        <button
          onClick={shortify}
          className="w-[100%] lg:p-2 lg:w-[4.5rem] bg-black text-[#ffb83a] hover:bg-[#ffb83a] hover:text-[white] rounded-[0.45rem] p-1"
        >
          Shortify
        </button>
      </div>
    </div>
  );
};

export default InputLink;
