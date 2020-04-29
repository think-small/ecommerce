import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selectors";
import RegisterLoginPage from "../pages/register-login/register-login.component";
import HomePage from "../pages/home/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import HatsPage from "../pages/shop/hats/hats.components";
import CheckoutPage from "../pages/checkout/checkout.component";

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
    <Route exact path="/checkout" component={CheckoutPage} />
  </Switch>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Router);
