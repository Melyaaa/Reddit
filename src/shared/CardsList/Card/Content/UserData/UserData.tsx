import React from 'react';
import styles from './userdata.css';

interface IUserDataProps {
  avatar: string
  username: string
}

export function UserData({avatar, username}: IUserDataProps) {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <a href="#user-url" className={styles.username}>{username}</a>
    </div>
  );
}
