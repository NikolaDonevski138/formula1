import React from "react";
import "./styles/styles.css";
import "./styles/worldChampionsList-style.css";
import { connect } from "react-redux";
import Spinner from "../spinner/index";
import { champion } from "../../actions/index";
import { Link } from "react-router-dom";
import WorldChampionItem from "./WorldChampionItem";

class WorldChampionsList extends React.Component {
  renderHelper = () => {
    if (this.props.worldChampions !== undefined) {
      const championsInfo = this.props.worldChampions.map(item => {
        const season = item.season;
        const { familyName, givenName } = item.DriverStandings[0].Driver;
        const { points, wins } = item.DriverStandings[0];
        const car = item.DriverStandings[0].Constructors[0].name;
        const driverId = item.DriverStandings[0].Driver.driverId;

        return (
          <Link to={`/race/${season}`} className="link">
            <div
              onClick={() =>
                this.props.champion(driverId, season, familyName, givenName)
              }
              className="champion-info grow"
            >
              <WorldChampionItem
                season={season}
                givenName={givenName}
                familyName={familyName}
                points={points}
                wins={wins}
                car={car}
              />
            </div>
          </Link>
        );
      });
      return championsInfo;
    } else {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }
  };
  render() {
    return <div className="cards">{this.renderHelper()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    worldChampions: state.worldChampions.data,
  };
};

export default connect(mapStateToProps, { champion })(WorldChampionsList);
