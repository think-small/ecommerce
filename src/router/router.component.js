import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterLoginPage from "../pages/register-login/register-login.component";
import HomePage from "../pages/home/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import HatsPage from "../pages/shop/hats/hats.components";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/register-login" component={RegisterLoginPage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/shop/hats" component={HatsPage} />
  </Switch>
);

export default Router;
