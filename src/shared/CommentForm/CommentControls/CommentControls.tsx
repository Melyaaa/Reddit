import React from 'react';
import styles from './commentcontrols.css';
import { ArrowsIcon } from '../../Icons/CommentControlsIcons/ArrowsIcon';
import { AddPictureIcon } from '../../Icons/CommentControlsIcons/AddPictureIcon';
import { AddDocumentIcon } from '../../Icons/CommentControlsIcons/AddDocumentIcon';
import { DownloadIcon } from '../../Icons/CommentControlsIcons/DownloadIcon';
import { AddContactIcon } from '../../Icons/CommentControlsIcons/AddContactIcon';
import { SyncIcon } from '../../Icons/CommentControlsIcons/SyncIcon';
import { TypeCIcon } from '../../Icons/CommentControlsIcons/TypeCIcon';
import { VoicePhotoIcon } from '../../Icons/CommentControlsIcons/VoicePhotoIcon';
import { ChatIcon } from '../../Icons/CommentControlsIcons/ChatIcon';
import { DrawIcon } from '../../Icons/CommentControlsIcons/DrawIcon';
import { EditFont } from '../../Icons/CommentControlsIcons/EditFont';
import { AddPDF } from '../../Icons/CommentControlsIcons/AddPDF';

export function CommentControls() {
  return (
    <div className={styles.commentControls}>
      <div className={styles.controlsBlock}>
        <ul className={styles.controlsList}>
          <li className={styles.controlItem}>
            <ArrowsIcon />
          </li>

          <li className={styles.controlItem}>
            <AddPictureIcon />
          </li>

          <li className={styles.controlItem}>
            <AddDocumentIcon />
          </li>

          <li className={styles.controlItem}>
            <DownloadIcon />
          </li>

          <li className={styles.controlItem}>
            <AddContactIcon />
          </li>

          <li className={styles.controlItem}>
            <SyncIcon />
          </li>

          <li className={styles.controlItem}>
            <TypeCIcon />
          </li>

          <li className={styles.controlItem}>
            <VoicePhotoIcon />
          </li>

          <li className={styles.controlItem}>
            <ChatIcon />
          </li>

          <li className={styles.controlItem}>
            <DrawIcon />
          </li>

          <li className={styles.controlItem}>
            <EditFont />
          </li>

          <li className={styles.controlItem}>
            <AddPDF />
          </li>
        </ul>
      </div>
      <button type="submit" className={styles.button}>Комментировать</button>
    </div>
  );

}
