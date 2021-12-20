import React from "react";
import CardComp from "./HomePage/CardComp";
import { useGetProductsQuery } from "../Services/eCommerceApi";
import { Spinner } from "react-bootstrap";

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery();
  if (error) return <p>{error.data.error}</p>;

  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (data) {
    return (
      <div className="nawproduct">
        {data.map((datum) => {
          return <CardComp props={datum} />;
        })}
      </div>
    );
  }
}
