import React from 'react';
import styles from './menucomments.css';
import { CommentsIcon } from '../../../../../Icons/CommentsIcon';

export function MenuComments() {
  return (
    <li className={styles.menuItem}>
      <CommentsIcon />
      <span className={styles.menuItemText}>Комментарии</span>
    </li>
  );
}
