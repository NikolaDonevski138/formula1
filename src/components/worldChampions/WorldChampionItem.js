import React from "react";
import "./style/worldChampionItem.css";

const WorldChampionItem = props => {
  return (
    <div className="flex">
      <div>
        <h2>{props.season}</h2>
      </div>
      <div className="driver-container">
        <h1 className="driver-info">Winner: {props.givenName}</h1>
        <h1 className="driver-info">{props.familyName}</h1>
        <p className="points">
          Points:{props.points} Wins:{props.wins}
        </p>
        <div className="car-container">
          <img className="img" src="./formula.png" alt="Formula 1" />
          <p className="margin-left">{props.car}</p>
        </div>
      </div>
    </div>
  );
};

export default WorldChampionItem;
