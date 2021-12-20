import React from "react";

export default function CardOverview() {
  return (
    <div>
      <h1 className="mt-5 ">Product Overview</h1>
      <div className="cardoverviewp ">
        <div className="container  mb-4">
          <div className="card mx-auto  col-md-3 col-10 mt-5 pt-4">
            <div className="d-flex sale "></div>{" "}
            <img
              classNameName="cardoverviewimg mx-auto img-thumbnail"
              alt=""
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6200/6200723_sd.jpg;maxHeight=640;maxWidth=550"
              width="auto"
              height="auto"
            />
            <div className="card-body  text-center mx-auto ">
              <h5 className="card-title ">iMac Pro</h5>
              <p className="card-text">
                <small>only </small>$1,399
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="card mx-auto col-md-3 col-10 mt-5 pt-4">
            <div className="d-flex sale "></div>{" "}
            <img
              classNameName="cardoverviewimg mx-auto img-thumbnail"
              alt=""
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6321/6321566_sd.jpg;maxHeight=640;maxWidth=550"
              width="auto"
              height="auto"
            />
            <div className="card-body text-center mx-auto m-3">
              <h5 className="card-title">Samsung Curved Monitor</h5>
              <p className="card-text">$299.99</p>
            </div>
          </div>
        </div>
        <div className="container mb-4 pb-3">
          <div className="card mx-auto col-md-3 col-10 mt-5 pt-4">
            <div className="d-flex sale "></div>{" "}
            <img
              classNameName="cardoverviewimg  mx-auto img-thumbnail"
              alt=""
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453112_sd.jpg;maxHeight=640;maxWidth=550"
              width="auto"
              height="auto"
            />
            <div className="card-body text-center mx-auto">
              <h5 className="card-title">Alienware Monitor</h5>
              <p className="card-text ">$379</p>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="card mx-auto col-md-3 col-10 mt-5 pt-4">
            <div className="d-flex sale "></div>{" "}
            <img
              classNameName="cardoverviewimg mx-auto img-thumbnail"
              alt=""
              src="https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80"
              width="auto"
              height="auto"
            />
            <div className="card-body text-center mx-auto">
              <h5 className="card-title">Logitech Mouse</h5>
              <p className="card-text">$79</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
