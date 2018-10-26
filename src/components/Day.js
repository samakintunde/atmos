import React from "react";

const Day = props => {
  return (
    <div>
      <h2>{props.location}</h2>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
};

export default Day;
