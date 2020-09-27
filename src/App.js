import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import ProductId from "./pages/ProductId";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cart />
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/products/:id" component={ProductId} />
        <Route path="/" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
