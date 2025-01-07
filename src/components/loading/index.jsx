import React, { Component } from "react";
import { Riple } from "react-loading-indicators";

export class Loading extends Component {
  render() {
    return (
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{
          height: "100vh", // Full height of the viewport
          position: "fixed", // Stay fixed in the background
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Light transparent background
          zIndex: 9999, // Make sure it is above other content
        }}
      >
        <Riple color="#32cd32" size="large" text="" textColor="#528ad1" />
      </div>
    );
  }
}

export default Loading;
