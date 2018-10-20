import React, { Component } from "react";
import Header from "../Header";
import Title from "../Title";
import { Container } from "../../style";
import "./index.css";
 
 


class About extends Component {
    render() {
        return(
            <div>
             <Header />
            <Title 
                title="A Gym for Me"
            />

            <div className="About__Container">
            <Container>
            <p> A Gym for Me is a site for athletes by athletes. Here, you'll find curated lists of specialized gyms in cities across 
                the United States. If you're looking for a powerlifting gym at home or in a new city–or even a rock climbing gym–we've 
                got you covered. </p>
                
                If you're interested in adding a new city or gym, please visit the <a href="https://gymfinder-contribute.herokuapp.com/">Contribute</a> page. 

            </Container>
            </div>
            </div>
        );
    }

}

export default About;