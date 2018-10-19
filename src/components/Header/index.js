import React, { Component } from "react";
import { HeaderCover } from "./style";
import { StyledLink } from "../../style";
import { Link } from 'react-router-dom';
import logo from "./Image-Logo.png"; // Import using relative path
import "../index.css";
 
class Header extends Component {
  render() {
    return (
      <HeaderCover>
        <Link to="/">
          <img width="100px" src={logo} alt="Logo" />
        </Link>

        <div className="link">
          <StyledLink to="/about">About</StyledLink>
        </div>
        <div className="link">
          <StyledLink to="/">Cities</StyledLink>
        </div>
      </HeaderCover>
    );
  }
}

export default Header;
