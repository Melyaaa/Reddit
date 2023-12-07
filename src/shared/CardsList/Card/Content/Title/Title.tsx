import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

interface ITitleProps {
  text: string
}

export function Title({ text }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={ () => setIsModalOpened(true) }>
        {text}
      </a>

      {isModalOpened && (
       <Post onClose={() => setIsModalOpened(false)}/>
      )}
    </h2>
  );
}
