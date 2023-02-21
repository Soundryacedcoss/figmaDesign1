import { Button, TextField } from "@mui/material";
import React from "react";
import logo from "../Images/OneStep v1/Norton Icon.png";
export const BillingSummery = () => {
  return (
    <div className="Right_card Billing_summery">
      <div style={{ display: "flex", columnGap: "208px" }}>
        <span className="container_head bill_sum_head">Billing Summery</span>
        <span>
          <i class="fa fa-caret-up"></i>
        </span>
      </div>
      <div style={{ marginTop: "29px", color: "#4F4F4F" }}>
        <span>Subtotal</span>
        <span style={{ float: "right" }}>$3720,50</span>
      </div>
      <div style={{ marginTop: "12px", color: "#4F4F4F" }}>
        <span>Discount</span>
        <span style={{ float: "right" }}>$3720,50</span>
      </div>
      <div style={{ marginTop: "12px", color: "#4F4F4F" }}>
        <span>warrenty (platinum)</span>
        <span style={{ float: "right" }}>$3720,50</span>
        <br />
        <a href="//">remove</a>
      </div>
      <div style={{ marginTop: "12px", color: "#4F4F4F" }}>
        <span>Shipping</span>
        <span style={{ float: "right" }}>$3720,50</span>
      </div>
      <div
        style={{ marginTop: "12px", marginBottom: "27px", color: "#4F4F4F" }}
      >
        <span>tex</span>
        <span style={{ float: "right" }}>$3720,50</span>
      </div>
      <hr />
      <div style={{ marginTop: "12px", marginBottom: "27px" }}>
        <span className="container_head">Grand total</span>
        <span style={{ float: "right", fontWeight: "bold" }}>$3720,50</span>
      </div>

      <TextField
        id="outlined-basic"
        label="Order Comment"
        variant="outlined"
        defaultValue="type here ...."
        style={{ width: "370px", height: "65px" }}
      />
      <div style={{ marginTop: "20px", display: "flex" }}>
        <div>
          <input type="checkbox" defaultChecked />
        </div>
        <div style={{ color: "#4F4F4F" }}>
          Please check to acknowledge our <a href="//">policy & term Policy</a>{" "}
        </div>
      </div>
      <div className="button">
        <Button variant="contained" className="Paybutton">
          Pay $3450.89
        </Button>
      </div>
      <img className="lastlogo" src={logo} alt="" />
    </div>
  );
};
