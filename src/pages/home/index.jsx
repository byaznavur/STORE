import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./home.css";
import UserCard from "../../components/cards/UserCard";
import Loading from "../../components/loading";

export class Home extends Component {
  state = {
    users: [],
    loading: false,
    products: [],
  };
  async getUsers() {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ users: data });
    } catch (error) {
      alert(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <section className="herro d-flex align-items-start flex-column justify-content-center">
          <div className="container  ">
            <div>
              <h1 className="fw-bold">
                Welcome to my <br />
                <span className="text-primary fw-bold">E-Commerce</span> website
              </h1>
              <p className="w-50 fw-semibold my-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                obcaecati itaque porro sit quis enim magnam aperiam commodi eum
                voluptatibus a cupiditate accusantium, nostrum ut, ea beatae.
                Nostrum, quae magni!
              </p>

              <div>
                <Link className="btn btn-primary me-3" to="/products">
                  Products
                </Link>
                <Link className="btn btn-primary " to="/comments">
                  Comments
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="users my-5">
          <div className="container users-wrapper">
            <h2 className="text-center fw-bold my-3">USERS</h2>

            <div className="user-cards d-flex flex-wrap gap-3 mx-auto">
              {loading ? (
                <Loading />
              ) : (
                users
                  .slice(0, 3)
                  .map((user, i) => <UserCard key={i} {...user} />)
              )}
            </div>
          </div>
        </div>

        <div className="products"></div>
      </div>
    );
  }
}

export default Home;
