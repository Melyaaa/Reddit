import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './post.css';
import { Controls } from '../CardsList/Card/Controls';
import { Content } from '../CardsList/Card/Content';
import { PostControls } from './PostControls';
import { CommentsBlock } from './CommentsBlock';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';

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
  score: number;
  sr_detail: Isr_detail;
}

interface IData {
  data: IPost
}

interface Isr_detail {
  header_img: string;
  banner_img: string;
}

interface IPostProps {
  onClose?: () => void
  post: IData
  position: { top: number; left: number };
}

export function Post(props: IPostProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  const node = document.getElementById('modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div style={{ top: props.position.top, left: props.position.left }} className={styles.modal} ref={ref}>
      <div className={styles.header}>
        <Controls score={props.post.data.score} />

        <Content post={props.post} />
      </div>

      <div className={styles.content}>
        <p className={styles.postDescr}>{props.post.data.selftext}</p>

        <img className={styles.postImg} src={props.post.data.sr_detail.banner_img} alt="postPhoto" />
      </div>

      <div className={styles.divider} />

      <PostControls />

      <CommentFormContainer />

      <div className={styles.divider} />

      <CommentsBlock post={props.post}/>

    </div>
  ), node);
}
