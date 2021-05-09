import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import MyUserContext from "./MyUserContext";
import { useState } from "react";

function App() {
  const [authedUser, setAuthedUser] = useState(false);
  return (
    // BEM
    <MyUserContext.Provider value={{ authedUser, setAuthedUser }}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <div>
              <Header
                signStatus={authedUser ? "Sign Out" : "Sign In"}
                username={authedUser ? "User" : "Guest"}
              />
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/checkout">
                {/* <Header /> */}
                <Checkout />
              </Route>
              <Route exact path="/">
                {/* <Header /> */}
                <Home />
              </Route>
            </div>
          </Switch>
        </div>
      </Router>
    </MyUserContext.Provider>
  );
}

export default App;
