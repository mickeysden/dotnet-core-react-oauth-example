import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import Home from "./components/Home";
import Login from "./containers/Login";
import Logout from "./containers/Logout";

const About = () => (
  <div><h1>About</h1></div>
)

const NotFound = () => (
  <div><h1>NotFound</h1></div>
)

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <main role="main" className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;