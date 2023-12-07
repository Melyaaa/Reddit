import React from 'react';
import styles from './content.css';
import { Title } from './Title';
import { UserData } from './UserData';

interface IContentProps {
  avatar: string
  text: string
  username: string
}

export function Content({avatar, text, username}: IContentProps) {
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <UserData avatar={avatar} username={username}/>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
        </div>
        <Title text={text} />
      </div>
  );
}
