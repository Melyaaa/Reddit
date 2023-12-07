import React from 'react';
import styles from './menushare.css';
import { ShareIcon } from '../../../../../Icons/ShareIcon';

export function MenuShare() {
  return (
    <li className={styles.menuItem}>
      <ShareIcon />
      <span className={styles.menuItemText}>
        Поделиться
      </span>
    </li>
  );
}
