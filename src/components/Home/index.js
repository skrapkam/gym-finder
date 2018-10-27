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
          title="A Gym for Me"
          subtitle="Choose your city"
        />
        <Container>
          {/* <div className="App__VerticalLine">
            <hr width="1" size="40" />
          </div> */}
          <Cities>
            <div className="city">
              <a href="/chicago">Chicago</a>
            </div>
            <div className="city">
              <a href="/dallas">Dallas</a>
            </div>
            <div className="city">
              <a href="/knoxville"> Knoxville</a>
            </div>
            <div className="city">
              <Link to="/losangeles">Los Angeles</Link>
            </div>
            <div className="city">
              <a href="/newyorkcity"> New York City</a>
            </div>
            <div className="city">
              <a href="/philadelphia"> Philadelphia</a>
            </div>
            <div className="city">
              <Link to="/sanfrancisco"> San Francisco</Link>
            </div>
            <div className="city">
              <a href="/seattle"> Seattle</a>
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
