import React from "react";
import "./style/race.css";
const RaceWinnerItem = props => {
  return (
    <div className={`row ${props.backgroundColor}`}>
      <div className="raceInfo-width">
        <p className={`${props.color}`}>Race: {props.raceName}</p>
      </div>
      <div className="winnerOfRace">
        <div className="margin-right">{props.icon}</div>
        <p className={`winner-container ${props.color}`}>
          Winner: {`${props.winnerName} ${props.winnerSurname}`}
        </p>
      </div>
    </div>
  );
};

export default RaceWinnerItem;
