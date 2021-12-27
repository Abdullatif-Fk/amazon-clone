import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { getBaskeTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  const checkoutHandle = () => {
    if (user && basket.length > 0) {
      navigate("/payment");
    } else if (!user) {
      alert("You should sign in before");
    } else {
      alert("You should chouse one product minimum");
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBaskeTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={checkoutHandle}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
