import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Pages/Orders/Orders";
const promise = loadStripe(
  "pk_test_51IG0eGIJRVu5i86EgK7ZQhRUEuS9ahtdZUP3YNJhbsGipSotbSkSG0fH8yfFIS7IXSsb4qZb1HUNvZWO5zO09qL900m6uk3pEh"
);
function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // the user just logged in / the user was logged in
        // const uid = user.uid;
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  //BEM convention
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
