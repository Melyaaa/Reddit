import React from 'react';
import styles from './menusave.css';
import { MenuSaveIcon } from '../../../../../Icons/MenuSaveIcon';

export function MenuSave() {
  return (
    <li className={styles.menuItem}>
      <MenuSaveIcon />

      <span className={styles.menuItemText}>
        Сохранить
      </span>
    </li>
  );
}
