import React, { Component } from 'react';
import '../../index.css';
import { Container, Cities} from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CityNewYorkCity from './card';




 class NewYorkCity extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="New York City"
         subtitle="Big Apple"
       />
       <Container>
       <div class="loader">
         <CityNewYorkCity />
        </div>
       </Container>
       </div>
    );
  }
}
export default NewYorkCity;
