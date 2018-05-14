import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SupportTop from '@/contaniers/SupportTop';
import History from '@/contaniers/History';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SupportTop} />
        <Route path="/list" component={History} />
      </Switch>
    );
  }
}
