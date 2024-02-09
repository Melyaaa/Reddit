import React from 'react';
import styles from './postcontrols.css';
import { BlockIcon, CommentsIcon, MenuSaveIcon, ShareIcon, WarningIcon } from '../../Icons';

export function PostControls() {

  return (
    <ul className={styles.postControls}>
      <li className={styles.postControlButton}>
        <CommentsIcon />
        <span className={styles.postButtonDescr}>
          22 комментария
        </span>
      </li>

      <li className={styles.postControlButton}>
        <ShareIcon />
        <span className={styles.postButtonDescr}>
          Поделиться
        </span>
      </li>

      <li className={styles.postControlButton}>
        <BlockIcon />
        <span className={styles.postButtonDescr}>
          Скрыть
        </span>
      </li>

      <li className={styles.postControlButton}>
        <MenuSaveIcon />
        <span className={styles.postButtonDescr}>
          Сохранить
        </span>
      </li>

      <li className={styles.postControlButton}>
        <WarningIcon />
        <span className={styles.postButtonDescr}>
          Пожаловаться
        </span>
      </li>
    </ul>
  );
}
