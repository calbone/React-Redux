import React from 'react';
import styles from './style.scss';
import PrimaryButton from '@/components/atoms/Button';
import H1Heading from '@/components/molecules/Heading';

const serviceList = [
  {
    serviceId: '01',
    data: {
      link: '/service/01',
      linkDescription: 'お支払・会員状態・退会について',
    }
  },
  {
    serviceId: '02',
    data: {
      link: '/service/02',
      linkDescription: 'mobileについて',
    }
  },
  {
    serviceId: '03',
    data: {
      link: '/service/03',
      linkDescription: '光について',
    }
  },
  {
    serviceId: '04',
    data: {
      link: '/service/04',
      linkDescription: 'レンタルについて',
    }
  },
  {
    serviceId: '05',
    data: {
      link: '/service/05',
      linkDescription: 'サービスについて',
    }
  }
];

export default () => {
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
          {serviceList.map((item, i) => {
            return (
              <li key={i}>
                <div className={styles.accordionWarp}>
                  <div id={item.serviceId} className={styles.accordionTitleWrap}>
                    <span className={styles.accordionTitle}>{item.data.linkDescription}</span>
                  </div>
                  {/*<ul className={styles.accordionDescription}>*/}
                    {/*<li className={styles.accordionList}>*/}
                      {/*<a href="#">小項目0101</a>*/}
                    {/*</li>*/}
                    {/*<li className={styles.accordionList}>*/}
                      {/*<a href="#">小項目0102</a>*/}
                    {/*</li>*/}
                    {/*<li className={styles.accordionList}>*/}
                      {/*<a href="#">小項目0103</a>*/}
                    {/*</li>*/}
                    {/*<li className={styles.accordionList}>*/}
                      {/*<a href="#">小項目0104</a>*/}
                    {/*</li>*/}
                  {/*</ul>*/}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
