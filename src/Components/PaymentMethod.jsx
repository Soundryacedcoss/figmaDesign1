import { TextField } from "@mui/material";
import React from "react";
import img1 from "../Images/OneStep v1/plogo.png";
import paymethodlogo from "../Images/OneStep v1/Group 1455.png";
export const PaymentMethod = () => {
  return (
    <div className="paymentMethod_container card">
      <span className="payment_heading container_head">Payment Method</span>
      <span style={{ float: "right",margin:"1px 43px 29px 0px" }}>
        <img src={paymethodlogo} alt="" />
      </span>
      <div
        className="shipppingaddress_row"
        style={{ backgroundColor: "white" }}
      >
        <input type="radio" className="radiobutton" />
        <b className="number">Paypal</b>
        <span className="shipping_text">
          you will be redirected to paypal website after submitting your order
        </span>
        <div
          style={{
            margin: "12px 12.5px 32px 20px",
            border: "solid gray 1px",
            borderRadius: "5px",
          }}
        >
          <img src={img1} alt="" style={{ padding: "2px" }} />
        </div>
      </div>
      <div className="Creditcard">
        <div>
          <input type="radio" className="radiobutton" />
          <b className="number">Pay with credit card</b>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Card Number"
            variant="outlined"
            defaultValue="1234 5678 9012 3456"
            style={{ width: "255px", height: "44px", marginLeft: "19px" }}
          />

          <TextField
            id="outlined-basic"
            label="Expiration Date"
            variant="outlined"
            defaultValue="DD/MM/YYYY"
            style={{
              width: "213px",
              height: "43px",
              marginLeft: "18px",
              marginRight: "23px",
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="Card security code"
            variant="outlined"
            defaultValue="****"
            style={{
              width: "255px",
              height: "44px",
              marginLeft: "19px",
              marginTop: "30px",
            }}
          />
          <div style={{ margin: "50px 0px 0px 18px" }}>
            <span className="paymentlink">What is this ?</span>
          </div>
        </div>
      </div>
      <span className="Lock_icon">
        <i class="fas fa-lock"></i>
      </span>
      <span className="TermCondition">
        We protect your payment information using encryption to provide bank
        level security
      </span>
    </div>
  );
};
