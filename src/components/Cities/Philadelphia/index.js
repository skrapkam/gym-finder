import React, { Component } from 'react';
import '../../index.css';
import { Container, Cities} from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CityPhiladelphia from './card';




 class Philadelphia extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="Philadelphia"
         subtitle="Philly"
       />
       <Container>
       <div class="loader">
         <CityPhiladelphia />
        </div>
       </Container>
       </div>
    );
  }
}
export default Philadelphia;
