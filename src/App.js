import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components

// containers
import About from './containers/About';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Spring from './containers/Spring';
import Summer from './containers/Summer';
import Autum from './containers/Autum';
import Winter from './containers/Winter';
import Create from './containers/Create';
import Profile from './containers/Profile';
import Login from './components/login/index';

// css
import './index.css';
import './App.css';


const App = () => {
  return(
    <div className="App">
      <Router>
        <Switch>
          <Route exaxt path='/About' render={() => <About name={'Licaxxx'} />} />
          <Route path='/create' component={Create} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/spring' component={Spring} />
          <Route path='/summer' component={Summer} />
          <Route path='/autum' component={Autum} />
          <Route path='/winter' component={Winter} />
          <Route path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
