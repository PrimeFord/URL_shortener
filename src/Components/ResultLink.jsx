import axios from "axios";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ResultLink = ({ inputValue }) => {
  // console.log(inputValue);
  const [shortifyLink, setShortifyLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(url);
      setShortifyLink(res.data.result.full_short_link);
      // console.log(shortifyLink);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) {
  //   return <p>Loading....</p>;
  // }
  // if (error) {
  //   return <p>Something went Wrong</p>;
  // }

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

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
          {copied ? "Copied" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ResultLink;
