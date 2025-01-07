import axios from "axios";
import React, { Component } from "react";
import Loading from "../../components/loading";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LIMIT } from "../../constants";
import Posts from "../posts";

export class Users extends Component {
  state = {
    users: [],
    loading: false,
    total: 0,
    activePage: 1,
    search: "",
  };

  async getUsers(search = "", page = 1) {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
          params: { q: search, _page: page, _limit: LIMIT },
        }
      );
      let { data: allData } = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
          params: { q: search },
        }
      );

      this.setState({ users: data, total: allData.length });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users, loading, total, search, activePage } = this.state;

    const handleSearch = (e) => {
      this.getUsers(e.target.value);
      this.setState({ search: e.target.value, activePage: 1 });
    };
    let pages = Math.ceil(total / LIMIT);
    const getPage = (page) => {
      this.getUsers(search, page);
      this.setState({ activePage: page });
    };
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <input
            onChange={handleSearch}
            value={search}
            type="text"
            className="mx-auto form-control w-75 my-3"
            placeholder={`Searching users ${total}`}
          />
        </div>
        <div className=" users-wrapper d-flex flex-wrap gap-3">
          {loading ? (
            <Loading />
          ) : (
            users.map((user, i) => (
              <Card
                key={i}
                style={{ width: "20rem" }}
                className="my-3 mx-auto "
              >
                <Card.Body>
                  <Card.Title>
                    {user.id}.{user.name}
                  </Card.Title>
                  <Card.Text className="m-1 fw-semibold">
                    Username: {user.username}
                  </Card.Text>

                  <div className="d-flex gap-3">
                    <Link
                      className="btn btn-primary w-100"
                      to={`/users/${user.id}`}
                    >
                      USERS
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
        <div className="mx-auto w-100 d-flex justify-content-center gap-3">
          {Array(pages)
            .fill(1)
            .map((_, i) => (
              <button
                onClick={() => getPage(i + 1)}
                className={`btn btn-${
                  i + 1 === activePage ? "danger" : "primary"
                }`}
              >
                {i + 1}
              </button>
            ))}
        </div>
        <div>
          <Posts />
        </div>
      </div>
    );
  }
}

export default Users;
