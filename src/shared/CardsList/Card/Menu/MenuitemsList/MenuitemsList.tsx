import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../Icons';
import styles from './menuitemslist.css';
import { MenuComments } from './MenuComments';
import { MenuShare } from './MenuShare';
import { MenuSave } from './MenuSave';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuitemsList({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <MenuComments />

      <div className={styles.divider} />

      <MenuShare />

      <div className={styles.divider} />

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <span className={styles.menuItemText}>Скрыть</span>
      </li>

      <div className={styles.divider} />

      <MenuSave />

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <WarningIcon />
        <span className={styles.menuItemText}>Пожаловаться</span> 
      </li>
    </ul>
  );
}
