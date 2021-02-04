import React from 'react';
import DefaultDesktopNav from '../navigation/DefaultDesktopNav';
import styles from '../../../styles/DefaultLayout.module.scss';

interface Props {
}

const DefaultLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <DefaultDesktopNav />
    <div id={styles.wrapper}>
      {children}
    </div>
  </div>

);

export default DefaultLayout;
