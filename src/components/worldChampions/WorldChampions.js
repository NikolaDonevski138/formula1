import React from "react";
import { connect } from "react-redux";
import { fetch_formula_data } from "../../actions/index";
import WorldChampionsList from "./WorldChampionsList";

class WorldChampions extends React.Component {
  componentDidMount() { 
    this.props.fetch_formula_data();
  }

  render() {
    return (
      <div>
        <WorldChampionsList />
      </div>
    );
  }
}

export default connect(null, { fetch_formula_data })(WorldChampions);
