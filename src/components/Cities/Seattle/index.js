import React, { Component } from 'react';
import '../../index.css';
import { Container, Cities} from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CitySeattle from './card';




 class Seattle extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
         title="Seattle"
         subtitle="The Emerald City"
       />
       <Container>
       <div class="loader">
         <CitySeattle />
        </div>
       </Container>
       </div>
    );
  }
}
export default Seattle;
