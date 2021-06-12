import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/screens/Home";
import Cart from "./components/screens/Cart";
import Product from "./components/screens/Product";
import Login from "./components/screens/Login";
import Checkout from "./components/screens/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
