import React, { Component } from "react";
import Header from "../Header";
import Title from "../Title";

class About extends Component {
    render() {
        return(
            <div>
            <Header />
            <Title 
                info="About"
                subtitle="About Gym Finder"
            />
            </div>
        );
    }

}

export default About;