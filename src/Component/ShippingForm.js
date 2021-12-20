import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ShippingForm() {
  return (
    <div className=" d-flex align-items-center justify-content-center">
      <div class="">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <div class="form1">
          <div class="fields1 fields--2">
            <label class="field1">
              <span class="field__label1" for="firstname">
                First name
              </span>
              <input class="field__input1" type="text" id="firstname" />
            </label>
            <label class="field1">
              <span class="field__label1" for="lastname">
                Last name
              </span>
              <input class="field__input1" type="text" id="lastname" />
            </label>
            <label class="field1">
              <span class="field__label1" for="country">
                City
              </span>
              <select class="field__input1" id="city">
                <option> </option>
                <option value="unitedstates">Slemani</option>
                <option value="unitedstates">Erbil</option>
                <option value="unitedstates">Duhok</option>
                <option value="unitedstates">Kerkuk</option>
                <option value="unitedstates">Helebja</option>
              </select>
            </label>
            <label class="field1">
              <span class="field__label1" for="address">
                Address
              </span>
              <input class="field__input1" type="text" id="address" />
            </label>
          </div>
          <label class="field1">
            <span class="field__label1" for="address">
              Phone Number
            </span>
            <input class="field__input1" type="text" id="phonenumber" />
          </label>
        </div>
        <hr />
        <button class="button1 " style={{ fontSize: `14px` }}>
          Continue
        </button>
        <Button  className="btn mt-5" as={Link} style={{ textDecoration: "none" }} to="/">
          Home
        </Button>
      </div>
    </div>
  );
}
