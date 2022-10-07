import { useEffect, useState } from 'react';
import styles from './modal.module.css';

export default function Modal({ show, onClose, className, children }) {
  const [styleClass, setStyleClass] = useState('init');

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose(false);
    };
    window.addEventListener('keyup', handleKeyPress);
    return () => window.removeEventListener('keyup', handleKeyPress);
  }, []);

  useEffect(() => {
    if (!show) return;
    setTimeout(() => {
      setStyleClass('full');
    }, 0);
  }, [show]);

  return (
    <>
      {show ? (
        <div className={`${styles.mainContainer}`}>
          <div className={`${styles[styleClass]} ${styles.childContainer} ${className}`}>
            <>
              <div></div>
              {children}
            </>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
