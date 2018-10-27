import React, { Component } from 'react';
import Home from '../Home';
import SanFrancisco from '../Cities/SanFrancisco';
import LosAngeles from '../Cities/LosAngeles';
import Chicago from '../Cities/Chicago';
import Dallas from '../Cities/Dallas';
import Knoxville from '../Cities/Knoxville';
import NewYorkCity from '../Cities/NewYorkCity';
import Philadelphia from '../Cities/Philadelphia';
import Seattle from '../Cities/Seattle';
import About from '../About';
import '../../loader';

import { injectGlobal } from 'styled-components';
import { Route, BrowserRouter, Switch, IndexRoute} from 'react-router-dom';

 
injectGlobal `
:root {
  --link-color: #0F0F0F;
}
* {
   border: 0;
   box-sizing: inherit;
   -webkit-font-smoothing: antialiased;
   font-weight: inherit;
   margin: 0;
   outline: 0;
   padding: 0;
   text-decoration: none;
   text-rendering: optimizeLegibility;
   -webkit-appearance: none;
   -moz-appearance: none;
 }
 html {
   box-sizing: border-box;
    font-size: 16px;
   line-height: 1.5;
   background-color: #FFF;
   color: #000;
   padding: 0;
   margin: 0;
   -webkit-font-smoothing: antialiased;
   font-family: -apple-system, BlinkMacSystemFont, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
 }

 a {
   text-decoration: underline;
   color: var(--link-color);
 }
 
 ::selection {
	background: rgba(255, 255, 0, 0.2);
}
::-moz-selection {
	background: rgba(255, 255, 0, 0.2);
}
`;

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sanfrancisco" component={SanFrancisco} />
      <Route path="/losangeles" component={LosAngeles} />
      <Route path="/chicago" component={Chicago} />
      <Route path="/dallas" component={Dallas} />
      <Route path="/knoxville" component={Knoxville} />
      <Route path="/newyorkcity" component={NewYorkCity} />
      <Route path="/philadelphia" component={Philadelphia} />
      <Route path="/seattle" component={Seattle} />
      <Route path="/About" component={About} />
      //add error path
     </Switch>
     </BrowserRouter>

    );
  }
}
export default App;
