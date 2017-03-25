
import React from 'react';
import { Link } from "react-router";
import './css/bootstrap.min.css';

var NavBar = React.createClass({
  render: function(){
    return (
     

        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                     <a className="navbar-brand" href="/">Field Archery Finder (FAF)</a>

                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                             <Link to="about">about</Link>
                        </li>
                        <li>
                            <Link to="venues">Venues</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to="register">Log-in</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>


    );
  }
});

export default NavBar;