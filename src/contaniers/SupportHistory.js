import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from '@/components/pages/SupportHistory';
import { fetchHistory } from '@/actions/supportHistory';

export default connect(state => ({ history: state.history }), { fetchHistory })(
  class HistoryContainer extends Component {
    componentDidMount() {
      this.props.fetchHistory();
    }
    render() {
      return <History {...this.props} />;
    }
  }
);
