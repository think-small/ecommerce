import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import RegisterLoginPage from "./pages/register-login/register-login.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import HatsPage from "./pages/shop/hats/hats.components";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register-login" component={RegisterLoginPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
