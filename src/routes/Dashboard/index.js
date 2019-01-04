import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

function Dashboard() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>dashboard</h1>
      
    </div>
  );
}

Dashboard.propTypes = {
};

export default connect()(Dashboard);
