import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Title, Text, Button, Label } from "./style.js";
import "./index.css";
import Header from "../Header";
import { Container } from "../../style";
import axios from "axios";


export default class Contribute extends Component {
  constructor() {
    super()
      this.state = {
        city: '',
        gym: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { city, gym } = this.state;

    const form = await axios.post('/api/form', {
      city,
      gym
    })
  }

  render() {
    return (
      <div>
      <Header />
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <h1>Your Feedback</h1>

        <label>
          City
        </label>
          <input 
            className="input" 
            type="text" 
            name="city"
            onChange={this.handleChange}  />

        <label>
          Gym
        </label>
          <input 
            className="input" 
            type="text" 
            name="gym"
            onChange={this.handleChange}  />

 

        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn--submit" />
        </div>
      </form>
      </div>
    );
  }
}
