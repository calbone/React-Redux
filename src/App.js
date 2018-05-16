import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SupportTop from '@/contaniers/SupportTop';
import History from '@/contaniers/SupportHistory';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SupportTop} />
        <Route path="/log" component={History} />
      </Switch>
    );
  }
}
