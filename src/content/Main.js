import React from "react";
//import { Link } from "react-router";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Slider from "./Slider";
//import Landing from "./Landing";

//add CSS!
import './css/half-slider.css'
import './css/bootstrap.css'

export default class Layout extends React.Component {
  render() {
   // const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <NavBar />

        <br />

        <Slider />

        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
