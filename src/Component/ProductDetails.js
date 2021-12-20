import React from "react";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../Services/eCommerceApi";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  if (error) return <p>{error.data.error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (data) {
    return (
      <div>
        <div class="card-wrapper">
          <div class="card12">
            {/* <!-- card left --> */}
            <div class="product-imgs">
              <div class="img-display">
                <div class="img-showcase">
                  <img src={data.image} alt="shoe image" />
                </div>
              </div>
            </div>
            {/* <!-- card right --> */}
            <div class="product-content">
              <h2 class="product-title">{data.name}</h2>
              <hr />

              <div class="product-detail">
                <h4>{data.description}</h4>
              </div>

              <div class="product-price">
                <h3 class="new-price">
                  Price: <span>${data.price}</span>
                </h3>
              </div>
              <div class="purchase-info">
                <input type="number" min="0" value="1" />
                <button type="button" class="btn">
                  Add to Cart <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
