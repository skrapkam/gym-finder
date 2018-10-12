import React, { Component } from 'react';
import Home from '../Home';
import Header from '../Header';
import Title from '../Title';
import SanFrancisco from '../SanFrancisco';
import LosAngeles from '../LosAngeles';
import Contribute from '../Contribute';
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
 
 body {
  }

`;

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contribute" component={Contribute} />     
      <Route path="/sanfrancisco" component={SanFrancisco} />
      <Route path="/losangeles" component={LosAngeles} />
      //add error path
     </Switch>
     </BrowserRouter>

    );
  }
}
export default App;
