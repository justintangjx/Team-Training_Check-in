import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navtabs extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link
              to="/awesome"
              className="nav-link"
              id="What was AWESOME-tab"
              data-toggle="tab"
              role="tab"
              aria-controls="What was AWESOME"
              aria-selected="true"
            >
              What was AWESOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/toimprove"
              className="nav-link"
              id="What to work on-tab"
              data-toggle="tab"
              role="tab"
              aria-controls="What to work on"
              aria-selected="false"
            >
              What to work on
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manager"
              className="nav-link"
              id="Team Temperature check-tab"
              data-toggle="tab"
              role="tab"
              aria-controls="Team Temperature check"
              aria-selected="false"
            >
              Team Temperature check
            </Link>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div
            class="tab-pane show active"
            id="What was AWESOME"
            role="tabpanel"
            aria-labelledby="What was AWESOME-tab"
          />
          <div
            class="tab-pane fade"
            id="What to work on"
            role="tabpanel"
            aria-labelledby="What to work on-tab"
          />
          <div
            class="tab-pane fade"
            id="Team Temperature check"
            role="tabpanel"
            aria-labelledby="Team Temperature check-tab"
          />
        </div>
      </div>
    );
  }
}

export default Navtabs;
