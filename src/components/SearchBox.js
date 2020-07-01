import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue br-pill"
        type="search"
        placeholder="Type Here"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
