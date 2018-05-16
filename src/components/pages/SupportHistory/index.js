import React, { Fragment } from 'react';
import Styles from './supportList.scss';
import H1Heading from '@/components/molecules/Heading';

export default (props) => {
  console.log(props);
  const { matchedHistoryList } = props;
  return (
    <Fragment>
      <H1Heading>履歴一覧</H1Heading>
      {/*{ matchedHistoryList.length > 0 ?*/}
        {/*<section className={Styles.historyListWrap}>*/}
          {/*<ul className={Styles.historyList}>*/}
            {/*{ matchedHistoryList.map((history, i) => (*/}
              {/*<li key={i}>*/}
                {/*<Link className={Styles.historyItem} to={history.data.link}>*/}
                  {/*<div className={Styles.statusWrap}>*/}
                    {/*<div className={Styles.statusContent}>*/}
                      {/*<span className={Styles.status} />*/}
                      {/*<span className={Styles.content}>{ history.data.linkDescription}</span>*/}
                    {/*</div>*/}
                    {/*<span className={Styles.update}>*/}
                    {/*<span className={Styles.data}>{history.data.date}</span>*/}
                    {/*<span className={Styles.time}>{history.data.time}</span>*/}
                  {/*</span>*/}
                  {/*</div>*/}
                  {/*<WebAppIcon*/}
                    {/*className={Styles.linkedIcon}*/}
                    {/*iconName={'ico_arrow'}*/}
                    {/*width={13}*/}
                    {/*height={13}*/}
                  {/*/>*/}
                {/*</Link>*/}
              {/*</li>*/}
            {/*))}*/}
          {/*</ul>*/}
        {/*</section> : null*/}
      {/*}*/}
    </Fragment>
  );
};
