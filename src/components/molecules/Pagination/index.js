import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import * as Actions from '@/reducers/pagination';

export default connect(
  state => ({
    pagination: state.pagination
  }),
  Actions
)(
  class PaginationContainer extends Component {
    componentWillReceiveProps(nextProps) {
      if (
        this.props.totalCounter !== nextProps.totalCounter ||
        this.props.perPageCounter !== nextProps.perPageCounter
      ) {
        this.props.initPagination({
          total: nextProps.totalCounter,
          counter: nextProps.perPageCounter
        });
      }
    }

    render() {
      const {
        pagination: { totalPage }
      } = this.props;
      return totalPage > 1 ? <Pagination {...this.props} /> : null;
    }
  }
);
