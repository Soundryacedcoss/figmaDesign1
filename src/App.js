import "./App.css";
import { BillingAddress } from "./Components/BillingAddress";
import { BillingSummery } from "./Components/BillingSummery";
import { DiscountCode } from "./Components/DiscountCode";
import { Left } from "./Components/Left";
import { OrderReview } from "./Components/OrderReview";
import { PaymentMethod } from "./Components/PaymentMethod";
import { Right } from "./Components/Right";
import { Shipping } from "./Components/Shipping";

import logo from "./Images/OneStep v1/Logo.svg";
function App() {
  return (
    <div className="Container">
      <header>
        <img src={logo} alt="" />
        <p style={{ float: "right" }}>
          Already have an account ? <a href="//">Sign In</a>
        </p>
      </header>
      <div className="card_container" style={{ }}>
        <div style={{ width: "570px" }}>
          <BillingAddress />
          <Shipping />
          <PaymentMethod />
        </div>
        <div style={{ width: "370px" }}>
          <OrderReview />
          <DiscountCode />
          <BillingSummery />
        </div>
      </div>
    </div>
  );
}

export default App;
