import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OrderList from "./components/OrderList"
import OrderPreview from "./components/OrderPreview"
import AccountNavBar from "./components/AccountNavBar";
import NavBar from "./components/Footer";
import GrnOrder from "./components/GrnOrder";
import ProjectSite from "./components/ProjectSite";
import ViewStock from "./components/ViewStock";
import Notification from "./components/Notification";
import SiteList from "./components/SiteList";
import SiteDetail from "./components/SiteDetail";
import AddSite from "./components/AddSite";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {window.location.pathname !== "/" && <AccountNavBar />}
        <Route path="/OrderList" exact component={OrderList}></Route>
        <Route path="/OrderPreview" exact component={OrderPreview}></Route>
        <Route path="/GrnOrder" exact component={GrnOrder}></Route>
        <Route path="/ProjectSite" exact component={ProjectSite}></Route>
        <Route path="/ViewStock" exact component={ViewStock}></Route>
        <Route path="/Notification" exact component={Notification}></Route>
        <Route path="/SiteList" exact component={SiteList}></Route>
        <Route path="/SiteDetail" exact component={SiteDetail}></Route>
        <Route path="/AddSite" exact component={AddSite}></Route>
        {window.location.pathname !== "/" && <NavBar />}
      </BrowserRouter>
    );
  }
}
