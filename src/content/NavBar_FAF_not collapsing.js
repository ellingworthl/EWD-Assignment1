
import React from 'react';
import { Link } from "react-router";

var NavBar = React.createClass({
  render: function(){
    return (
     
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">

				{/*Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
					{/*Brand and toggle get grouped for better mobile display */}
                    <a className="navbar-brand" href="/">Field Archery Finder (FAF)</a>
                </div>

				{/*Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                             <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="venues">Venues</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to="register">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    );
  }
});

export default NavBar;