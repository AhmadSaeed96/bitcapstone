import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/ProductSlice";

export default function CartDetails() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.value);
  console.log(products);
  return (
    <div className="cartparent">
      <div class="container mt-5">
        <div class="row">
          <div class="col-xs-8">
            <div class="panel panel-info">
              <div class="panel-heading">
                <div class="panel-title">
                  <div class="row">
                    <div class="col-xs-6">
                      <h5>
                        <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Shopping Cart
                      </h5>
                    </div>
                    <div class="col-xs-6"></div>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                {products.map((product) => {
                  return (
                    <div
                      class="row d-flex justify-content-center align-items-center"
                      key={product._id}
                    >
                      <div class="col-xs-2">
                        <img
                          class="img-responsive"
                          alt=""
                          src={product.image}
                        />
                      </div>
                      <div class="col-xs-4">
                        <h4 class="product-name">
                          <strong>{product.name}</strong>
                        </h4>
                        <h4>
                          <small>{product.description}</small>
                        </h4>
                      </div>
                      <div class="col-xs-6">
                        <div class="col-xs-6 text-right">
                          <h6>
                            <h3>
                              {product.price} <span class="text-muted">$</span>
                            </h3>
                          </h6>
                        </div>
                        <div class="col-xs-4"></div>
                        <div class="col-xs-2">
                          <button
                            onClick={() => {
                              dispatch(removeProduct(product._id));
                            }}
                            className="button1 glyphicon glyphicon-trash"
                            href="#"
                          >
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div class="row">
                  <div class="text-center"></div>
                </div>
              </div>
              <div class="panel-footer">
                <div class="row text-center">
                  <div class="col-xs-3 ">
                    <button
                      type="button1"
                      class="button1  btn-dark btn-sm btn-block"
                    >
                      <Nav.Link
                        style={{
                          textDecoration: `none`,
                          fontSize: `10px`,
                          color: `white`,
                        }}
                        as={Link}
                        to="/shippingform"
                      >
                        Checkout
                      </Nav.Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button1" class="button1  btn-dark btn-sm b">
              <Nav.Link
                style={{
                  textDecoration: `none`,
                  fontSize: `10px`,
                  color: `white`,
                }}
                as={Link}
                to="/product"
              >
                Continue shopping
              </Nav.Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
