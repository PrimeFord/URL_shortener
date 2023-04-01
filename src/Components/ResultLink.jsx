import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ResultLink = ({ inputValue }) => {
  console.log(inputValue);
  const [shortifyLink, setShortifyLink] = useState("wwww.sswdw.reref");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <div className=" lg:mt-6 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
      <p className="w-[100%] lg:w-[60%] h-[2rem] flex">
        <span className="h-[2rem] w-[2rem] p-2 bg-[#ffb83a] rounded-l-[0.45rem]">
          <img className="w-[100%] h-[100%]" src="/image/copyy.png" />
        </span>
        <p className="w-[100%] lg:w-[85%] py-1 px-2 text-left bg-white rounded-r-[0.45rem]">
          {shortifyLink}
        </p>
      </p>
      <CopyToClipboard text={shortifyLink} onCopy={() => setCopied(true)}>
        <button
          className={
            copied
              ? "bg-black text-[#ffb83a] w-[100%] lg:p-2 lg:w-[4.5rem] rounded-[0.45rem] p-1"
              : "w-[100%] lg:p-2 lg:w-[4.5rem] ] bg-[#ffb83a] text-[white] rounded-[0.45rem] p-1"
          }
        >
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ResultLink;
