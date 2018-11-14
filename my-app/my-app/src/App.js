import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import PageNotFound from './pages/pageNotFound'
import {withRouter} from 'react-router'


class App extends Component {
  render() {
    return(
      <Switch>
        
        <Route path='/login' component={Login}/> 

        <Route path='/conta' component={Signup}/>

        <Route component ={PageNotFound}/>


      
      </Switch>

    )
  }
}

export default withRouter(App);
