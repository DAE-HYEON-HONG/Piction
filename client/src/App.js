import React, { Component } from "react";
import HeaderComponent from "./components/HomePage/headerComponent.js";
import Banner from "./components/HomePage/Banner.js";
import Genre from "./components/HomePage/Genre.js";
import Trending from "./components/HomePage/Trending.js";
import PictionBig from "./components/HomePage/PictionBig.js";
import Footer from "./components/HomePage/Footer.js";
import RegisterAdd from "./components/HomePage/RegisterAdd.js";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-content">
          <div className="AppInnerSize">
            <HeaderComponent />
            <Switch>
              <Route path="/RegisterAdd*" component={RegisterAdd} />
              <Route path="/Banner" component={Banner} />
              <Route path="/Genre" component={Genre} />
              <Route path="/Trending" component={Trending} />
            </Switch>
            <Banner />
            <Genre />
            <Trending />
          </div>
          <PictionBig />
          <Footer />
        </div>
        <div className="backgroundCol" />
      </div>
    );
  }
}

export default App;
