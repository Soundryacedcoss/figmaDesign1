import React from "react";
import { BillingAddress } from "./BillingAddress";
import { PaymentMethod } from "./PaymentMethod";
import { Shipping } from "./Shipping";

export const Left = () => {
  return (
    <div>
      <BillingAddress />
      <Shipping />
      <PaymentMethod />
    </div>
  );
};
