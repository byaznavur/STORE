import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

export class Product extends Component {
  state = {
    product: null,
    loading: false,
  };

  async getProduct() {
    let productId = window.location.pathname.split("/").at(-1);
    try {
      this.setState({ loading: true });

      let { data } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );

      this.setState({ product: data });
    } catch (error) {
      alert(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="d-flex container my-5 gap-4">
            <img
              src={product?.image}
              className="w-50 h-100 "
              alt={product?.title}
              style={{ objectFit: "cover" }}
            />
            <div className="card-body w-50">
              <h2 className="card-title fw-bold">{product?.title}</h2>
              <p className="card-text h4 my-3">{product?.description}</p>
              <p className="card-text h5 my-2">
                <strong>Category:</strong> {product?.category}
              </p>
              <p className="card-text h5 my-2">
                <strong>Price:</strong> ${product?.price}
              </p>
              <p className="card-text h5 my-2">
                <strong>Rating:</strong> {product?.rating.rate} (
                {product?.rating.count} reviews)
              </p>
              <Link href="#" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
