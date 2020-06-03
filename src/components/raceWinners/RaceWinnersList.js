import React from "react";
import { connect } from "react-redux";
import "./style/style.css";
import "../style.css";
import Spinner from "../spinner/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faCrown } from "@fortawesome/free-solid-svg-icons";
import RaceWinnerItem from "./RaceWinnerItem";
class RaceWinnersList extends React.Component {
  renderHelper = () => {
    if (this.props.raceInfo !== undefined) {
      const raceInfo = this.props.raceInfo.map((data, index) => {
        const raceName = data.raceName;
        const winnerName = data.Results[0].Driver.givenName;
        const winnerSurname = data.Results[0].Driver.familyName;
        const raceDriverId = data.Results[0].Driver.driverId;
        const worldChampionId = this.props.worldChampionInfo.driverId;

        let icon = () => {
          if (raceDriverId === worldChampionId) {
            return (
              <div>
                <FontAwesomeIcon icon={faCrown} style={{ color: "yellow" }} />
              </div>
            );
          }
        };

        if (index % 2 === 0) {
          return (
            <RaceWinnerItem
              key={data.round}
              raceName={raceName}
              winnerName={winnerName}
              winnerSurname={winnerSurname}
              icon={icon()}
              backgroundColor={"bg-color1"}
              color={"text"}
            />
          );
        } else {
          return (
            <RaceWinnerItem
              key={data.round}
              raceName={raceName}
              winnerName={winnerName}
              winnerSurname={winnerSurname}
              icon={icon()}
              backgroundColor={"bg-color2"}
              color={"text"}
            />
          );
        }
      });
      return raceInfo;
    } else {
      return <Spinner />;
    }
  };

  render() {
    return (
      <div>
        <Link to="/" className="link">
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            color="orange"
            style={{ fontSize: "2rem" }}
          />
        </Link>
        <div className="table">{this.renderHelper()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    raceInfo: state.raceInfo.data,
    worldChampionInfo: state.worldChampionInfo.data,
  };
};

export default connect(mapStateToProps)(RaceWinnersList);
