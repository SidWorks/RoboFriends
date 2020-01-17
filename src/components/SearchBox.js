import React from "react";

const SearchBox = ({ SearchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 br3 tc l3"
        type="search"
        placeholder="Type Here"
        onChange={SearchChange}
      />
    </div>
  );
};

export default SearchBox;
