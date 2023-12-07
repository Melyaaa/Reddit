import React from 'react';
import styles from './card.css';
import { Preview } from './Preview';
import { Controls } from './Controls';
import { Content } from './Content';
import { Menu } from './Menu';

interface IPost {
  avatar: string;
  text: string;
  username: string;
  previewPhoto: string;
  subreddit_name_prefixed: string;
  title: string;
  sr_detail: Isr_detail;
}

interface IData {
  data: IPost
}

interface Isr_detail {
  header_img: string;
  banner_img: string;
}

interface ICardProps {
  post: IData
}

export function Card({ post }: ICardProps) {
  return (
    <li className={styles.card}>
      <Content avatar={post.data.sr_detail.header_img} text={post.data.title} username={post.data.subreddit_name_prefixed} />

      <Preview previewPhoto={post.data.sr_detail.banner_img} />

      <Menu />

      <Controls />
    </li>
  );
}
