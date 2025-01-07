import React, { Component } from "react";

export class Comments extends Component {
  render() {
    let commentId = window.location.pathname.split("/").at(-1);
    console.log(commentId);

    return <div></div>;
  }
}

export default Comments;
