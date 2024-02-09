import React from 'react';
import styles from './comment.css';
import { CommentsIcon, ShareIcon, WarningIcon } from '../../../Icons';
import { CommentUserData } from './CommentUserData';
import { CommentReplyForm } from './CommentReplyForm';

interface IComment {
  body: string
  author: string
}

interface ICommentData {
  data: IComment
}

interface ICommentProps {
  comment: ICommentData
}


export function Comment({ comment }: ICommentProps) {
  const [isReplying, setIsReplying] = React.useState<boolean | null>(null)
  const formRef = React.useRef<HTMLFormElement | null>(null)


  const handleClick = () => {
    setIsReplying(true);
  }

  const setFocus = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: "nearest" })
    }
  }

  return (
    <div className={styles.commentsBlock}>
      <div className={styles.commentsBlockMain}>
        <div className={styles.commentsBlockLeft}>
          <div className={styles.controls}>
            <button className={styles.up}>
              <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
              </svg>
            </button>

            <button className={styles.down}>
              <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4" />
              </svg>
            </button>
          </div>

          <div className={styles.blockMark} />
        </div>

        <div className={styles.commentsCard}>
          <div className={styles.cardHeader}>
            <CommentUserData username={comment.data.author} />
            <span className={styles.createdAt}>1 час назад</span>
          </div>

          <p className={styles.cardText}>
            {comment.data.body}
          </p>

          <div className={styles.cardControls}>
            <button onClick={handleClick} className={styles.controlBtn}>
              <CommentsIcon />
              <span className={styles.controlBtnType}>Ответить</span>
            </button>

            <button className={styles.controlBtn}>
              <ShareIcon />
              <span className={styles.controlBtnType}>Поделиться</span>
            </button>

            <button className={styles.controlBtn}>
              <WarningIcon />
              <span className={styles.controlBtnType}>Пожаловаться</span>
            </button>
          </div>
        </div>
      </div>
      {isReplying && <CommentReplyForm username={comment.data.author}/>}
    </div>
  );
}
