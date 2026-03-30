import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input.trim()) return;
    setCity(input);
    setInput("");
  };

  return (
    <div className="input-group my-4 mx-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Get Weather
      </button>
    </div>
  );
};

export default SearchBar;