import React from 'react';
import styles from './menu.css';
import { MenuIcon } from '../../../Icons';
import { Dropdown } from '../../../Dropdown';
import { MenuitemsList } from './MenuitemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuitemsList postId='1234'/>
          <button className={styles.closeButton}>
              Закрыть
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
