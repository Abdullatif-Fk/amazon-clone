import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import Header from "../../components/Header/Header";
import Subtotal from "../../components/Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket?.map((item, key) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={key}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
