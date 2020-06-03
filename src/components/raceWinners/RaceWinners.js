import React from "react";
import { fetch_race_data } from "../../actions/index";
import { connect } from "react-redux";
import RaceWinnersList from "./RaceWinnersList";
import "../shared.css";

class RaceWinners extends React.Component {
  componentDidMount() {
    if (!this.props.worldChampions) {
      return this.props.history.push("/");
    }
    this.props.fetch_race_data();
  }

  render() {
    return <RaceWinnersList className="table" />;
  }
}

const mapStateToProps = state => {
  return {
    worldChampions: state.worldChampions.data,
  };
};

export default connect(mapStateToProps, { fetch_race_data })(RaceWinners);
