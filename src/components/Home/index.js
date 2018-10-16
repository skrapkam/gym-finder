import React, { Component } from "react";
import "./index.css";
import Header from "../Header";
import Title from "../Title";
import { Container, Cities } from "../../style";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Title
          title="Find your next speciality gym"
          subtitle="Choose your city"
        />
        <Container>
          <div className="App__VerticalLine">
            <hr width="1" size="40" />
          </div>
          <Cities>
            <div className="city">
              <a href="#">Chicago</a>
            </div>
            <div className="city">
              <a href="#">Dallas</a>
            </div>
            <div className="city">
              <a href="#"> Knoxville</a>
            </div>
            <div className="city">
              <Link to="/losangeles">Los Angeles</Link>
            </div>
            <div className="city">
              <a href="#"> New York City</a>
            </div>
            <div className="city">
              <a href="#"> Philidelphia</a>
            </div>
            <div className="city">
              <Link to="/sanfrancisco"> San Francisco</Link>
            </div>
            <div className="city">
              <a href="#"> Seattle</a>
            </div>
            <div className="city">
              <a href="https://gymfinder-contribute.herokuapp.com/"> Add your city</a>
            </div>
          </Cities>
        </Container>
      </div>
    );
  }
}
export default Home;
