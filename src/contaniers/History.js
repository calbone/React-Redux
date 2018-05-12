import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from '@/components/pages/History';
import { fetchHistory } from '@/actions/history';

export default connect (
  state => (
    { historyList: state.history.historyList }
  ), {fetchHistory}
)(class HistoryContainer extends Component {
    componentDidMount() {
      this.props.fetchHistory();
    }
    render() {
      return <History {...this.props} />;
    }
  }
);
