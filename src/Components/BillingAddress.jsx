import { TextField } from "@mui/material";
import React from "react";

export const BillingAddress = () => {
  return (
    <div className="Billingaddress_container card">
      <p className="container_head">Billing Address</p>
      <TextField
        id="outlined-basic"
        label="first Name"
        variant="outlined"
        defaultValue="Alex"
        style={{ width: "255px", height: "44px" }}
      />

      <TextField
        id="outlined-basic"
        label="last Name"
        variant="outlined"
        defaultValue="driver"
        style={{ width: "255px", height: "44px", marginLeft: "16px" }}
      />
      <TextField
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        defaultValue="lucky@gmail.com"
        style={{ width: "528px", height: "44px", marginTop: "35px" }}
      />
      <TextField
        id="outlined-basic"
        label="street Address"
        variant="outlined"
        defaultValue=" "
        style={{ width: "528px", height: "44px", marginTop: "35px" }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        style={{ width: "528px", height: "44px", marginTop: "35px" }}
      />
      <TextField
        id="outlined-basic"
        label="state/province"
        variant="outlined"
        defaultValue={"California"}
        style={{ width: "255px", height: "44px", marginTop: "35px" }}
      />

      <TextField
        id="outlined-basic"
        label="city"
        variant="outlined"
        defaultValue={"san diego"}
        style={{
          width: "255px",
          height: "44px",
          marginTop: "35px",
          marginLeft: "16px",
        }}
      />
      <TextField
        id="outlined-basic"
        label="zip/postal code"
        variant="outlined"
        defaultValue={"225562"}
        style={{ width: "255px", height: "44px", marginTop: "35px" }}
      />

      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        defaultValue={"1234567890"}
        style={{
          width: "255px",
          height: "44px",
          marginLeft: "16px",
          marginTop: "35px",
        }}
      />
      <div style={{ marginTop: "25px" }}>
        <input type="checkbox" defaultChecked />
        <span style={{ marginLeft: "8px" }}>
          My billing and shipping item are the same
        </span>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input type="checkbox" />
        <span style={{ marginLeft: "8px" }}>
          {" "}
          Create the same for latter use
        </span>
      </div>
    </div>
  );
};
