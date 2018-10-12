import React, { Component } from 'react';
import './index.css';
import { Container, Cities} from '../../style';
import Title from '../Title';
import Header from '../Header';
import CitySanFrancisco from '../Cities/CitySanFrancisco';

 class SanFrancisco extends Component {
  render() {
    return(


      <div className="wrapper">
        <Header />
        <Title
          title="San Francisco"
          subtitle="The City"
        />
        <Container>
          <div class="loader">
            <CitySanFrancisco /> 
          </div>
        </Container>
       </div>
    );
  }
}
export default SanFrancisco;
