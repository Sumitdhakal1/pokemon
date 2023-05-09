import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [input, setInput] = useState("");
  return (
    <div className="input-warper">
      <FaSearch id="search-icon" />
      <input
        placeholder="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
};

export default Searchbar;
