import React, { Component } from "react";
import "./index.css";
import { CardContainer } from "./style";

class Card extends Component {
  render() {
    return (
      <CardContainer>
        <div className="Card__Image">
          <img src={this.props.image} />
        </div>

        <div className="Card__Name">{this.props.name}</div>

        <div className="Card__Description">{this.props.description}</div>

        <div className="Card__hashtag">{this.props.hashtag}</div>

        <div className="Card__Links">
          <div className="Card__Website item">
            {Object.keys(this.props.website).length == 0 ? (
              console.log("hello")
            ) : (
                <a target="_blank" href={this.props.website}>
                  Website
              </a>
              )}
          </div>

          <div className="Card__Address item">
            {Object.keys(this.props.address).length == 0 ? (
              console.log("hello")
            ) : (
                <a
                  target="_blank"
                  href={"http://maps.google.com/?q=" + this.props.address}
                >
                  Address
              </a>
              )}
          </div>

          <div className="Card__Phone item">{this.props.phone}</div>

          <div className="Card__Submit item">
            {Object.keys(this.props.submit).length == 0 ? (
              console.log("hello")
            ) : (
                <a href={this.props.submit}>Submit</a>
              )}
          </div>
        </div>
      </CardContainer>
    );
  }
}
export default Card;
