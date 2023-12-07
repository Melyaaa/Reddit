import React from 'react';
import styles from './userblock.css';
import { UserAnonIcon } from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href='https://www.reddit.com/api/v1/authorize?client_id=Jn-81vDL2R5SFUaKFNErXw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <UserAnonIcon />
        }
      </div>

      <div className={styles.usernameBox}>
        <span className={styles.username}>{username || 'Аноним'}</span>
      </div>
    </a>
  );
}
