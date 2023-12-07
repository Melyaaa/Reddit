import * as React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { userContext } from '../../Context/userContext';

export function SearchBlock() {
  const data = React.useContext(userContext)
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
