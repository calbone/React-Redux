import React, { Component } from 'react';
import { connect } from 'react-redux';
import SupportTop from '@/components/pages/SupportTop';
import { fetchService } from '@/actions/tasksActionCreator';

export default connect(
  state => (
    { serviceList: state.service.serviceList }
  ), { fetchService }
)(class SupportTopContainer extends Component {
    componentDidMount() {
      this.props.fetchService();
    }
    render() {
      return (
        <SupportTop {...this.props} />
      );
    }
  }
);
