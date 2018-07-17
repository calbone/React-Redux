// @flow
import React, { Fragment } from 'react';
import Styles from './supportList.scss';
import H1Heading from '@/components/molecules/Heading';

type Props = {
  history: Object
};

export default (props: Props) => {
  const {
    history: { historyList }
  } = props;

  return (
    <Fragment>
      <H1Heading>履歴一覧</H1Heading>
      {historyList.length > 0 ? (
        <section className={Styles.historyListWrap}>
          <ul className={Styles.historyList}>
            {historyList.map((history, i) => (
              <li key={i}>
                <a className={Styles.historyItem} to={history.data.link}>
                  <div className={Styles.statusWrap}>
                    <div className={Styles.statusContent}>
                      <span className={Styles.status} />
                      <span className={Styles.content}>
                        {history.data.linkDescription}
                      </span>
                    </div>
                    <span className={Styles.update}>
                      <span className={Styles.data}>{history.data.date}</span>
                      <span className={Styles.time}>{history.data.time}</span>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Fragment>
  );
};
