import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [coinsCount, setCoinsCount] = useState(100);

  useEffect(() => {
    setTimeout(function () {
      setCoinsCount(coinsCount + 1);
    }, 1000);
  }, [coinsCount]);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/shop">
          <Shop coinsCount={coinsCount} animation="fadeOutUp" />
        </Route>
        <Route path="/">
          <Home coinsCount={coinsCount} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
