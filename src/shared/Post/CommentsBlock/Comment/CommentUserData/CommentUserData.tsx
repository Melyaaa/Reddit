import React from 'react';
import styles from './commentuserdata.css';

interface ICommentUserDataProps {
  avatar?: string
  username: string
}

export function CommentUserData({avatar, username}: ICommentUserDataProps) {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <a href="#user-url" className={styles.username}>{username}</a>
    </div>
  );
}
