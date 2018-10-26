import React from "react";

const DayCard = props => {
  return (
    <div className="day-card">
      <h2 className="day-card-day">{props.day}</h2>
      <img className="day-card-icon" src={props.imgSrc} alt={props.imgAlt} />
      <div className="day-card">
        <p className="day-card-temp">{props.temp}</p>
        <p className="day-card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default DayCard;
