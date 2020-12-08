import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

import Img from "react-cool-img";

import "../styles/carousel.scss";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Img
              style={{
                backgroundColor: "#ECEFF1",
                width: "480",
                height: "320",
              }}
              lazy={true}
              className="carousel__image"
              src={product.image}
              alt={product.name}
              fluid
            />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name}{" "}
                <span style={{ color: "rgba(0, 0, 0, 0.42)" }}>
                  {" "}
                  ${product.price}{" "}
                </span>
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
