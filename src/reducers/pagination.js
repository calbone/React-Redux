const initState = {
  counter: 0,
  total: 0,
  totalPage: 1,
  currentPage: 1,
  hasPrevPage: false,
  hasNextPage: false
};

export default function paginationReducer(state = initState, action) {
  switch (action.type) {
    case PAGINATION_INITIATE:
      return {
        ...state,
        ...action.payload,
        totalPage: Math.ceil(data.total / data.counter),
        hasNextPage: data.total > data.counter
      }
    default:
      return state
  }
}

    [PAGINATION_TO_PREV]: state => {
      if (state.hasPrevPage) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
          hasPrevPage: state.currentPage - 1 !== 1,
          hasNextPage: true
        };
      }
      return { ...state };
    },
    [PAGINATION_TO_NEXT]: state => {
      if (state.hasNextPage) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
          hasPrevPage: true,
          hasNextPage: state.currentPage + 1 !== state.totalPage
        };
      }
      return { ...state };
    },
    [PAGINATION_TO_PINPOINT]: (state, { payload: { data } }) => {
      if (data.pinpoint >= 1 && data.pinpoint <= state.totalPage) {
        return {
          ...state,
          currentPage: data.pinpoint,
          hasPrevPage: data.pinpoint !== 1,
          hasNextPage: data.pinpoint !== state.totalPage
        };
      }
      return { ...state };
    }
