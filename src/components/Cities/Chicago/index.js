import React, { Component } from 'react';
import '../../index.css';
import { Container, Cities} from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CityChicago from './card';




 class Chicago extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="Chicago"
         subtitle="Windy City"
       />
       <Container>
       <div class="loader">
         <CityChicago />
        </div>
       </Container>
       </div>
    );
  }
}
export default Chicago;
