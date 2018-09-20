const PAGINATION = 'PAGINATION';
const PAGINATION_INITIATE = PAGINATION + '_INITIATE';
const PAGINATION_TO_PREV = PAGINATION + '_TO_PREV';
const PAGINATION_TO_NEXT = PAGINATION + '_TO_NEXT';
const PAGINATION_TO_PINPOINT = PAGINATION + '_TO_PINPOINT';

export const initPagination = ({ total, counter }) => ({
  type: PAGINATION_INITIATE,
  payload: {
    data: { total, counter }
  }
  // if (total > 0 && counter > 0) {
  //   return createAction(PAGINATION_INITIATE)({ data: { total, counter } });
  // }
  //   return createAction('nothing')();
});

export const toPrevPage = e => ({
  if(e) {
    e.preventDefault();
  },
  type: PAGINATION_TO_PREV
});

export const toNextPage = e => ({
  if(e) {
    e.preventDefault();
  },
  type: PAGINATION_TO_NEXT
});

export const toPinpointPage = e => ({
  type: PAGINATION_TO_PINPOINT,
  payload: {
    data: { pinpoint: Number(e.target.id) }
  }
});
