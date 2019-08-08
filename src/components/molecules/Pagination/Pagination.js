import React from 'react';
import Link from 'shared/common/components/atoms/LinkToNext';
import styles from './pagination.scss';
// import cssConnector from 'shared/helper/cssConnector';
import WebAppIcon from 'shared/common/components/atoms/Icons/WebAppIcon';

// const css = cssConnector(styles);

export default props => {
  const {
    pagination: {
      totalPage,
      currentPage,
      hasPrevPage,
      hasNextPage,
      pagerLinkNum = 5
    },
    toPrevPage,
    toNextPage,
    toPinpointPage
  } = props;
  console.log('props', props);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalCounter / props.perPageCounter);
    i++
  ) {
    pageNumbers.push(i);
  }
  let index = pageNumbers.indexOf(currentPage);
  let showPageNumbers = pageNumbers.slice(index, index + pagerLinkNum);
  console.log('showPageNumbers', showPageNumbers);
  return (
    <div className={styles.paginationWrap}>
      <div className={styles.pagination}>
        <div
          className={css('prevPage', hasPrevPage ? null : 'inactive')}
          onClick={toPrevPage}
        >
          <WebAppIcon
            iconName={'ico_arrow'}
            width={22}
            height={22}
            style={{ transform: 'rotate(180deg)' }}
          />
        </div>
        <ul className={styles.paginationList}>
          {currentPage >= pagerLinkNum ? (
            <li id={pageNumbers[0]} onClick={toPinpointPage}>
              {pageNumbers[0]}
            </li>
          ) : null}
          {currentPage >= pagerLinkNum ? (
            <li id={pageNumbers[0]} className={styles.ellipsis}>
              ・・・
            </li>
          ) : null}
          {showPageNumbers.map((num, i) => {
            return (
              <li
                key={i}
                id={num}
                onClick={toPinpointPage}
                className={styles.currentPage === num ? 'current' : null)}
              >
                {num}
              </li>
            );
          })}
          {!(currentPage >= pageNumbers[pageNumbers.length - pagerLinkNum]) &&
          pageNumbers.length >= pagerLinkNum ? (
            <li
              id={pageNumbers[pageNumbers.length - 1]}
              className={styles.ellipsis}
            >
              ・・・
            </li>
          ) : null}
          {!(currentPage >= pageNumbers[pageNumbers.length - pagerLinkNum]) &&
          pageNumbers.length >= pagerLinkNum ? (
            <li
              id={pageNumbers[pageNumbers.length - 1]}
              onClick={toPinpointPage}
            >
              {pageNumbers[pageNumbers.length - 1]}
            </li>
          ) : null}
        </ul>
        <div
          className={css('nextPage', styles.hasNextPage ? null : 'inactive')}
          onClick={toNextPage}
        >
          <WebAppIcon iconName={'ico_arrow'} width={22} height={22} />
        </div>
      </div>
    </div>
  );
};
