import React from 'react';
import styles from './commentsblock.css';
import { useCommentsData } from '../../../hooks/useCommentsData';
import { Comment } from './Comment/Comment';

interface IPost {
  avatar: string;
  text: string;
  username: string;
  previewPhoto: string;
  subreddit_name_prefixed: string;
  title: string;
  selftext: string;
  score: number;
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

interface ICommentsBlockProps {
  post: IData
}


export function CommentsBlock({ post }: ICommentsBlockProps) {
  const [comments] = useCommentsData(post.data.id);

  return (
      <ul className={styles.commentsList}>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </ul>
  )
}
