import React, { Component } from "react";
import { Riple } from "react-loading-indicators";

export class Loading extends Component {
  render() {
    return (
      <div className="w-100 d-flexjustify-content-center align-items-center h-100">
        <Riple color="#32cd32" size="large" text="" textColor="#528ad1" />
      </div>
    );
  }
}

export default Loading;
