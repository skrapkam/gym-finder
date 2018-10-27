import React, { Component } from 'react';
import '../../index.css';
import { Container, Cities} from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CityKnoxville from './card';




 class Knoxville extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="Knoxville"
         subtitle="The Marble City"
       />
       <Container>
       <div class="loader">
         <CityKnoxville />
        </div>
       </Container>
       </div>
    );
  }
}
export default Knoxville;
