import React from "react";
import logosvg from "./logosvg.svg";
import { Link } from "react-router-dom";
import "./Pstyles.scss";

export class Plogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
          <Link to="/">
            {" "}
            <img src="logo1.jpg" />
          </Link>
        </div>
        <div className="content">
          <div className="Image">
            <img src={logosvg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="pharmacyname">Pharmacy Name</label>
              <input
                type="text"
                name="pharmacyname"
                placeholder="Pharmacy Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="registrationnumber">Registration Number</label>
              <input
                type="text"
                name="registrationnumber"
                placeholder="Registration Number"
              />
            </div>
            <div className="footer">
              <button type="button" className="btn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
