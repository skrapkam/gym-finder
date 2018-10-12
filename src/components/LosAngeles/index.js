import React, { Component } from 'react';
import '../index.css';
import { Container, Cities} from '../../style';
import Title from '../Title';
import Header from '../Header';
import CityLosAngeles from '../Cities/CityLosAngeles';
import Card from '../Card';




 class LosAngeles extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="Los Angeles"
         subtitle="The City of Angels"
       />
       <Container>
       <div class="loader">
         <CityLosAngeles />
        </div>
       </Container>
       </div>
    );
  }
}
export default LosAngeles;
