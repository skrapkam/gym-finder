import React, { Component } from 'react';
import { load } from './Dallas';
import Card from '../../Card';
import { GymContainer } from '../style';
import '../card.css';

class CityDallas extends Component {

  state = {
  gyms: [],
  loading: true,
  error: null
}
  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load('client', this.initClient);
    setTimeout(() => this.setState({ loading: false }), 2500); // simulates an async action, and hides the spinner

  }

  onLoad = (data, error) => {
  if (data) {
    const gyms = data.gyms;
    this.setState({ gyms });
  } else {
    this.setState({ error });
  }
};

  initClient = () => {
  // 2. Initialize the JavaScript client library.
  window.gapi.client
    .init({
      apiKey:'AIzaSyC_u18bSXGueaNI8HyQU9lO_kiHN0CmZH8',
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest'],
    })
    .then(() => {
    // 3. Initialize and make the API request.
    load(this.onLoad);
  });
};

  render() {
    const { loading } = this.state;

   if(loading) { // if your component doesn't have to wait for an async action, remove this block
     return null; // render null when app is not ready
   }

    const { gyms, error } = this.state;
     if (error) {
       return <div>{this.state.error}</div>;
     }
     return (
       <GymContainer>
        <ul>
         {gyms.map((gym, i) => (
           <li key={i}>

               <Card
               image={gym.image}
             name={gym.name}
             description={gym.description}
             website={gym.website}
             address={gym.address}
             phone={gym.phone}
             hashtag={gym.hashtag}
             submit={gym.submit}
             />
             </li>
         ))}
       </ul>
      </GymContainer>
     );
  }

}

export default CityDallas;
