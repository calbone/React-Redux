import React from 'react';
import styles from './style.scss';
import PrimaryButton from '@/components/atoms/Button';
import H1Heading from '@/components/molecules/Heading';

export default (props) => {
  return (
    <div>
      <H1Heading>サポートセンター</H1Heading>
      <p className={styles.pageDescription}>
        お問い合わせ内容とサポートセンターからの返信が確認できます。
      </p>
      <div className={styles.buttonWrap}>
        <PrimaryButton>履歴一覧</PrimaryButton>
      </div>
      <div className={styles.serviceListWrap}>
        <ul className={styles.serviceList}>
          {props.serviceList.map((item, i) => {
            return (
              <li key={i}>
                <div className={styles.accordionWarp}>
                  <div id={item.serviceId} className={styles.accordionTitleWrap}>
                    <span className={styles.accordionTitle}>{item.data.linkDescription}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
