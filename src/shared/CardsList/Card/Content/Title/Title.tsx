import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

interface IPost {
  avatar: string;
  text: string;
  username: string;
  previewPhoto: string;
  subreddit_name_prefixed: string;
  title: string;
  selftext: string;
  id: string;
  subreddit: string;
  score: number
  sr_detail: Isr_detail;
}

interface IData {
  data: IPost
}

interface Isr_detail {
  header_img: string;
  banner_img: string;
}

interface ITitleProps {
  post: IData
}

export function Title({ post }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [linkPos, setLinkPos] = useState({ top: 0, left: 0 })
  const linkRef = React.useRef<HTMLAnchorElement | null>(null);

  const linkClick = () => {
    if (linkRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect();
      setLinkPos({
        top: linkRect.top + document.documentElement.scrollTop + linkRef.current.offsetHeight,
        left: linkRect.left,
      });
    }
    setIsModalOpened(true);
  }


  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} ref={linkRef} onClick={ linkClick }>
        {post.data.title}
      </a>

      {isModalOpened && (
       <Post position={linkPos} post={post} onClose={() => setIsModalOpened(false)}/>
      )}
    </h2>
  );
}
