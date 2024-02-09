import React from 'react';
import styles from './menu.css';
import { MenuIcon } from '../../../Icons';
import { Dropdown } from '../../../Dropdown';
import { MenuitemsList } from './MenuitemsList';

export function Menu() {
  const [buttonPosition, setButtonPosition] = React.useState({ top: 0, left: 0 });
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: buttonRect.top + document.documentElement.scrollTop + buttonRef.current.offsetHeight,
        left: buttonRect.left,
      });
    }
  };

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button ref={buttonRef} onClick={handleButtonClick} className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
        position={buttonPosition}
      >
        <div className={styles.dropdown}>
          <MenuitemsList postId='1234' />
          <button className={styles.closeButton}>
            Закрыть
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
