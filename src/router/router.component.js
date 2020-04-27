import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegisterLoginPage from "../pages/register-login/register-login.component";
import HomePage from "../pages/home/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import HatsPage from "../pages/shop/hats/hats.components";

const Router = (props) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route
      exact
      path="/register-login"
      render={() =>
        props.currentUser ? <Redirect to="/" /> : <RegisterLoginPage />
      }
    />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/shop/hats" component={HatsPage} />
  </Switch>
);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Router);
