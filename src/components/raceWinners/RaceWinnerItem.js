import React from "react";
import "./style/style.css";
const RaceWinnerItem = props => {
  return (
    <div className={`row ${props.backgroundColor}`}>
      <div className="raceInfo-width">
        <p className={`${props.color}`}>Race: {props.raceName}</p>
      </div>
      <div className="winnerRace">
        <div className="ma">{props.icon}</div>
        <p className={`width ${props.color}`}>
          Winner: {`${props.winnerName} ${props.winnerSurname}`}
        </p>
      </div>
    </div>
  );
};

export default RaceWinnerItem;
