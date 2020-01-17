import React from "react";

const Card = ({ id, name, email }) => {
  //destructuring th props

  return (
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shawdow-5 ">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="photorob" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
