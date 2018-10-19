import React, { Component } from "react";
import { HeaderCover } from "./style";
import logo from "./Image-Logo.png"; // Import using relative path
import "./index.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <HeaderCover>
        <Link to="/">
          <img width="100px" src={logo} alt="Logo" />
        </Link>

        <div className="link">
          <a href="#">About</a>
        </div>
        <div className="link">
          <Link to="/">Cities</Link>
        </div>
      </HeaderCover>
    );
  }
}

export default Header;
