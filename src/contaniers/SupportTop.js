import React, { Component } from 'react';
import { connect } from 'react-redux';
import SupportTop from '@/components/pages/SupportTop';
import { fetchService } from '@/actions/tasksActionCreator';

function mapStateToProps({ services }) {
  return {
    services
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchService() {
      dispatch(fetchService());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class SupportTopContainer extends Component {
    componentDidMount() {
      this.props.fetchService();
    }
    render() {
      return (
        <SupportTop serviceList={this.props.services} />
      );
    }
  }
);
