import axios from "axios";
import React, { Component } from "react";
import { Loading } from "./../../components/loading/index";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LIMIT_POST } from "../../constants";

export class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    search: "",
    activePage: 1,
    total: 0,
  };

  async getPosts(search = "", page = 1) {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: { q: search, _page: page, _limit: LIMIT_POST },
        }
      );
      let { data: allData } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: { q: search },
        }
      );
      this.setState({ posts: data, total: allData.length });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts, loading, search, total, activePage } = this.state;

    const handleSearch = (e) => {
      this.getPosts(e.target.value);
      this.setState({ search: e.target.value, activePage: 1 });
    };

    const pages = Math.ceil(total / LIMIT_POST);
    const getPage = (page) => {
      this.getPosts(search, page);
      this.setState({ activePage: page });
    };
    return (
      <div className="my-4 container">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="fw-bold">USERS' POSTS ({total})</h2>
          <input
            type="text"
            placeholder="Searching..."
            className="form-control w-50"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className=" d-flex flex-wrap gap-5 my-3 ">
          {loading ? (
            <Loading />
          ) : (
            posts.map((post) => (
              <Card style={{ width: "45%" }} className="mx-auto">
                <Card.Body>
                  <Card.Title>
                    {post.id}.{post.title}
                  </Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Link className="btn btn-primary">Go somewhere</Link>
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
      </div>
    );
  }
}

export default Posts;
