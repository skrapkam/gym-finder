import React, { Component } from 'react';
import '../../index.css';
import { Container, Cities} from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CityDallas from './card';




 class Dallas extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="Dallas"
         subtitle="Big D"
       />
       <Container>
       <div class="loader">
         <CityDallas />
        </div>
       </Container>
       </div>
    );
  }
}
export default Dallas;
