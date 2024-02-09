import React from 'react';
import styles from './content.css';
import { Title } from './Title';
import { UserData } from './UserData';

interface IPost {
  avatar: string;
  text: string;
  username: string;
  previewPhoto: string;
  subreddit_name_prefixed: string;
  title: string;
  selftext: string;
  score: number
  id: string;
  subreddit: string;
  sr_detail: Isr_detail;
}

interface IData {
  data: IPost
}

interface Isr_detail {
  header_img: string;
  banner_img: string;
}

interface IContentProps {
  post: IData
}

export function Content({ post }: IContentProps) {
  // const date = new Date(post.data.created)
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <UserData avatar={post.data.sr_detail.header_img} username={post.data.subreddit_name_prefixed}/>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
        </div>
        <Title post={post} />
      </div>
  );
}
