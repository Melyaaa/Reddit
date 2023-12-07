import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { postsContext } from '../Context/postsContext';


export function CardsList() {
  const postsData = React.useContext(postsContext);
  
  return (
    <ul className={styles.cardsList}>
      {postsData.map((post) => (
        <Card post={post}/>
      ))}
    </ul>
  );
}
