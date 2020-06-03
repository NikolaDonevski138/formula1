import React from "react";
import "./styles/worldChampionsList-style.css";

const WorldChampionItem = props => {
  return (
    <div class="flex">
      <div>
        <h2>{props.season}</h2>
      </div>
      <div className="driver-info">
        <h1 className="winner">Winner: {props.givenName}</h1>
        <h1 className="winner">{props.familyName}</h1>
        <p className="points">
          Points:{props.points} Wins:{props.wins}
        </p>
        <div className="car-info">
          <img className="img" src="./formula.png" />
          <p className="driving-car ml">{props.car}</p>
        </div>
      </div>
    </div>
  );
};

export default WorldChampionItem;
