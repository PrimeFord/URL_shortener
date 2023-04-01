import React from "react";

const Instruction = () => {
  return (
    <div>
      <ul className="lg:p-0 p-3 text-left mt-10 list-disc flex flex-col gap-3 text-[#616161]">
        <li>Paste the link to be truncated or shortened in the input field.</li>
        <li>Clik the Shortify button.</li>
        <li>Copy the link generated in the paragraph field.</li>
      </ul>
    </div>
  );
};

export default Instruction;
