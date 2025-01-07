import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class UserCard extends Component {
  render() {
    const { name, id, username, phone } = this.props;

    return (
      <Card key={id} style={{ width: "20rem" }} className=" mx-auto">
        <Card.Body>
          <Card.Title>
            {id}.{name}
          </Card.Title>
          <Card.Text>
            {username} - {phone}
          </Card.Text>
          <div className="d-flex gap-3">
            <Link className=" btn btn-primary w-100" to="/users">
              USERS
            </Link>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default UserCard;
