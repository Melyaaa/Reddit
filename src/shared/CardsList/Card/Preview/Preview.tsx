import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewPhoto: string
}

export function Preview({ previewPhoto }: IPreviewProps ) {
  return (
    <div className={styles.preview}>
        <img src={previewPhoto} alt="previewImg" className={styles.previewImg} />
    </div>
  );
}
