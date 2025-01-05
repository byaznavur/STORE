import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class UserCard extends Component {
  render() {
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Mr.John</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex gap-3">
            <Button variant="primary">POST</Button>
            <Button variant="primary">COMMENT</Button>
            <Button variant="primary">TODOS</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default UserCard;
