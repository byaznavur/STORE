import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loading } from "./../../components/loading/index";

export class Products extends Component {
  state = {
    products: [],
    loading: false,
  };

  async getProducts() {
    try {
      this.setState({ loading: true });

      let { data } = await axios.get("https://fakestoreapi.com/products");
      this.setState({ products: data });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getProducts();
  }
  render() {
    const { products, loading } = this.state;
    return (
      <div>
        <h2 className="text-center">Products</h2>

        <div className="d-flex flex-wrap my-4">
          {loading ? (
            <Loading />
          ) : (
            products.map((el) => (
              <Card style={{ width: "18rem" }} className="mx-auto ">
                <Card.Img
                  style={{ objectFit: "contain", height: "300px" }}
                  variant="top"
                  src={el.image}
                  className="p-2"
                />
                <Card.Body>
                  <Card.Title>{el.title.slice(0, 20)}...</Card.Title>
                  <Card.Text>{el.description.slice(0, 30)}...</Card.Text>
                  <Link
                    to={`/products/${el.id}`}
                    className="btn btn-primary w-100"
                  >
                    More
                  </Link>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Products;
