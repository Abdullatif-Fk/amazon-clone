import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./Pages/Login/Login";
function App() {
  //BEM convention
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
