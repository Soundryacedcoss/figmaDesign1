import React from "react";
import img1 from "../Images/OneStep v1/image 36.png";
export const Shipping = () => {
  return (
    <div className="shipppingaddress card">
      <p className="container_head" style={{ width: "136px", height: "20px" }}>
        Shipping method
      </p>
      <div className="shipppingaddress_row">
        <input type="radio" className="radiobutton" />
        <b className="number">$2.99</b>
        <span className="shipping_text">
          UPSC first class with tracking (3 to 5 days) COVID-19 Delay
        </span>
        <img src={img1} alt="" className="SideImg" />
      </div>
      <div
        className="shipppingaddress_row"
        style={{ marginTop: "15px", backgroundColor: "white",border:"solid gray 1px" }}
      >
        <input type="radio" className="radiobutton" />
        <b className="number">$9.99</b>
        <span className="shipping_text">
          UPSC priority with tracking (3 to 5 days) COVID-19 Delay
        </span>
        <img src={img1} alt="" className="SideImg" />
      </div>
    </div>
  );
};
