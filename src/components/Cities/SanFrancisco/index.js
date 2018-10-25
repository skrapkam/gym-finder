import React, { Component } from 'react';
import '../../index.css';
import { Container } from '../../../style';
import Title from '../../Title';
import Header from '../../Header';
import CitySanFrancisco from './card';

class SanFrancisco extends Component {
  render() {
    return (


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
