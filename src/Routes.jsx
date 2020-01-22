import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route, Redirect,
} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import client from './client';
import Dashboard from './components/Dashboard/dashboard';

class Routes extends Component {
  render() {
    /* const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render = {(props) => (
          checkToken() === true ? <Component {...props}/> : <Redirect to="/"/>
      )}/>
    ); */
    return (
      <Router>
        <main>
          <ApolloProvider client={client}>
            <Route exact path = "/" component={Dashboard} />
          </ApolloProvider>
        </main>
      </Router>
    );
  }
}

export default Routes;
