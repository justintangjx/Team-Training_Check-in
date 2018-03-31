import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navtabs extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/awesome" className="nav-link active">
              What was AWESOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/toimprove" className="nav-link">
              What to work on
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manager" className="nav-link">
              Team Temperature check
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navtabs;
