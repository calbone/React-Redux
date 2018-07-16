// @flow
import React, { Fragment } from 'react';
import Styles from './style.scss';
import PrimaryButton from '@/components/atoms/Button';
import H1Heading from '@/components/molecules/Heading';
import ServiceIcon from '@/components/atoms/icons/ServiceIcon';

type Props = {
  service: Object
};

export default (props: Props) => {
  const {
    service: { serviceList }
  } = props;
  return (
    <Fragment>
      <H1Heading>サポートセンター</H1Heading>
      <p className={Styles.pageDescription}>
        お問い合わせ内容とサポートセンターからの返信が確認できます。
      </p>
      <div className={Styles.buttonWrap}>
        <PrimaryButton to="/log">履歴一覧</PrimaryButton>
      </div>

      <div className={Styles.serviceListWrap}>
        <ul className={Styles.serviceList}>
          {serviceList.map((item, i) => {
            return (
              <li key={i}>
                <div className={Styles.accordionWarp}>
                  <div
                    id={item.serviceId}
                    className={Styles.accordionTitleWrap}
                  >
                    <ServiceIcon serviceName={item.data.serviceIcon} />
                    <span className={Styles.accordionTitle}>
                      {item.data.linkDescription}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
