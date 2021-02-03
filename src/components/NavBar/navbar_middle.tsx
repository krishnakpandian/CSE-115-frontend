import React, { Component } from "react";
import { props } from "../Results/result-body";
import './navbar_middle.css'
import "../../bulma.css"
import { stat } from "fs";

let status;

const NavbarMiddle: React.FC<props> = ({ results, statusCode, message, lat, lng, address }: props) => {
  status = address && (
    <div className="container is-widescreen" id="middle_navbar">
      <div className="notification" id="info_bar">
        <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
          Your Results
        </h1>
      </div>
    </div>
  );

  return (
    <div>
      {status}
    </div>
  );
}

export default NavbarMiddle;