import React from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  position: { top: number; left: number };
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP, position }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const node = document.getElementById('modal_root');
  if (!node) return null

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && ReactDOM.createPortal(
        <div style={{ top: `${position.top + 10}px`, left: `${position.left - 40}px` }} className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>,
        node
      )}
    </div>
  );
}
