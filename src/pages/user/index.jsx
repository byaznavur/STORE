import axios from "axios";
import React, { Component } from "react";
import Loading from "../../components/loading";
import { Card } from "react-bootstrap";

export class User extends Component {
  state = {
    user: null,
    loading: true,
  };

  async getUser() {
    let userId = window.location.pathname.split("/").at(-1);
    try {
      this.setState({ loading: true });

      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      this.setState({ user: data });
    } catch (error) {
      alert(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user, loading } = this.state;
    return (
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          user && (
            <Card className="my-3 mx-auto" style={{ maxWidth: "30rem" }}>
              <Card.Header className="bg-primary text-white text-center">
                <h5>{user.name}</h5>
                <small className="text-light fw-bold">@{user.username}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </Card.Text>
                <Card.Text>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </Card.Text>
                <Card.Text>
                  <strong>Address:</strong> {user.address.suite},{" "}
                  {user.address.street}, {user.address.city},{" "}
                  {user.address.zipcode}
                </Card.Text>
                <Card.Text>
                  <strong>Company:</strong> {user.company.name}
                  <br />
                  <em>{user.company.catchPhrase}</em>
                  <br />
                  <small>{user.company.bs}</small>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                <small>
                  Geo Location: {user.address.geo.lat}, {user.address.geo.lng}
                </small>
              </Card.Footer>
            </Card>
          )
        )}
      </div>
    );
  }
}

export default User;
