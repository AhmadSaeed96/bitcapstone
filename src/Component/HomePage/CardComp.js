import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appendProduct } from "../../features/ProductSlice";

export default function CardComp({ props }) {
  const dispatch = useDispatch()
  return (
    <div className="row cardparent">
      <div class="card2 col-6">
        <div class="imgBox">
          <Link to={`/product/${props._id}`}>
            <img src={props.image} alt="rasm" class="mouse" />
          </Link>
        </div>

        <div class="contentBox">
          <h3>{props.name}</h3>
          <h3>{props.description}</h3>
          <h2 class="price">{props.price}€</h2>
          <a href="#" class="buy" onClick={()=>{
            console.log(props)
            dispatch(appendProduct(props))}}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
