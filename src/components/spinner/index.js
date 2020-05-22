import React from "react";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <GridLoader
          css={override}
          size={30}
          color={"#EE371A"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner