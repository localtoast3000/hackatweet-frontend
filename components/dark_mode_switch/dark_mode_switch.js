import { useState, useEffect } from 'react';
import styles from './dark_mode_switch.module.css';
import theme from './theme.module.css';

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  const [icon, setIcon] = useState(darkMode ? <SunIcon /> : <MoonIcon />);

  useEffect(() => {
    darkMode ? setIcon(<SunIcon />) : setIcon(<MoonIcon />);
    console.log(darkMode);
  }, [darkMode]);

  return (
    <div className={`${styles.switchContainer} ${darkMode ? theme.dark : theme.light}`}>
      <button
        onClick={() => {
          setDarkMode(() => !darkMode);
        }}
        className={styles.switch}>
        {icon}
      </button>
    </div>
  );
}

function MoonIcon() {
  const [fullSize, setFullSize] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFullSize(true);
    }, 0);
    return () => clearInterval(interval);
  });

  return (
    <svg
      className={`${styles.moonIcon} ${fullSize ? styles.moonIconFullSize : ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 35'>
      <path d='M17.9029 35C23.425 35 28.4684 32.5442 31.8097 28.5201C32.304 27.9248 31.765 27.0551 31.0011 27.1973C22.3152 28.8143 14.3386 22.3044 14.3386 13.7337C14.3386 8.79662 17.0424 4.25667 21.4367 1.81221C22.1141 1.43541 21.9438 0.431553 21.1741 0.292578C20.0951 0.098091 19.0001 0.000159711 17.9029 0C8.02072 0 0 7.8279 0 17.5C0 27.1598 8.00814 35 17.9029 35Z' />
    </svg>
  );
}

function SunIcon() {
  const [fullSize, setFullSize] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFullSize(true);
    }, 0);
    return () => clearInterval(interval);
  });

  return (
    <svg
      className={`${styles.sunIcon} ${fullSize ? styles.sunIconFullSize : ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'>
      <path d='M20 9.7608C14.3541 9.7608 9.76071 14.3541 9.76071 20.0001C9.76071 25.646 14.354 30.2393 20 30.2393C25.6459 30.2393 30.2392 25.646 30.2392 20.0001C30.2392 14.3541 25.6459 9.7608 20 9.7608Z' />
      <path d='M17.9211 7.66518H22.0788C22.4077 7.66518 22.6903 7.52786 22.8541 7.28851C23.0181 7.04916 23.0437 6.73602 22.9247 6.42929L20.6372 0.539609C20.4549 0.0700654 20.1597 0 20 0C19.8402 0 19.5451 0.0701308 19.3628 0.539543L17.0752 6.42936C16.9562 6.73602 16.9819 7.0491 17.1457 7.28851C17.3096 7.52792 17.5923 7.66518 17.9211 7.66518Z' />
      <path d='M22.0788 32.3348H17.9211C17.5923 32.3348 17.3096 32.4722 17.1458 32.7115C16.982 32.951 16.9562 33.264 17.0753 33.5707L19.3628 39.4605C19.5451 39.9299 19.8402 40 20 40C20.1597 40 20.4549 39.9299 20.6372 39.4605L22.9247 33.5706C23.0437 33.2641 23.0181 32.951 22.8541 32.7115C22.6903 32.4722 22.4077 32.3348 22.0788 32.3348Z' />
      <path d='M8.33594 12.4721C8.49359 12.8301 8.79529 13.0437 9.143 13.0437C9.38117 13.0437 9.61731 12.9386 9.80796 12.7479L12.7479 9.80804C12.9804 9.5755 13.0832 9.2785 13.0297 8.99327C12.9762 8.70817 12.773 8.46857 12.4721 8.33602L6.68993 5.78876C6.54398 5.72451 6.40653 5.69189 6.28143 5.69189C6.07222 5.69189 5.89196 5.78438 5.78679 5.94562C5.6981 6.08163 5.6264 6.32124 5.78882 6.69L8.33594 12.4721Z' />
      <path d='M31.664 27.528C31.5064 27.17 31.2047 26.9563 30.8571 26.9563C30.6188 26.9563 30.3826 27.0615 30.1919 27.2522L27.252 30.1921C27.0194 30.4247 26.9167 30.7218 26.9702 31.0069C27.0236 31.292 27.227 31.5316 27.5278 31.664L33.3099 34.2114C33.4558 34.2756 33.5933 34.3082 33.7184 34.3082C33.9276 34.3082 34.1079 34.2156 34.213 34.0545C34.3018 33.9184 34.3735 33.6788 34.2111 33.3101L31.664 27.528Z' />
      <path d='M30.1919 12.7479C30.3826 12.9386 30.6188 13.0437 30.857 13.0437C31.2046 13.0437 31.5063 12.8301 31.6641 12.4721L34.2112 6.69006C34.3737 6.32124 34.302 6.0817 34.2133 5.94568C34.1081 5.78444 33.9278 5.69196 33.7186 5.69196C33.5935 5.69196 33.4561 5.72457 33.3101 5.78888L27.528 8.33595C27.2271 8.46856 27.0237 8.7081 26.9703 8.99327C26.9169 9.27843 27.0196 9.57549 27.2522 9.80804L30.1919 12.7479Z' />
      <path d='M9.80805 27.2522C9.61733 27.0615 9.38112 26.9563 9.14289 26.9563C8.79524 26.9563 8.49361 27.17 8.33596 27.528L5.78878 33.31C5.62629 33.6788 5.69799 33.9184 5.78675 34.0544C5.89191 34.2156 6.07224 34.3082 6.28139 34.3082C6.40649 34.3082 6.54394 34.2756 6.68995 34.2112L12.472 31.664C12.7729 31.5314 12.9763 31.2918 13.0297 31.0067C13.0831 30.7216 12.9805 30.4246 12.7479 30.192L9.80805 27.2522Z' />
      <path d='M39.4604 19.3628L33.5708 17.0755C33.4439 17.0261 33.3162 17.0012 33.1913 17.0012C32.6951 17.0012 32.3349 17.3882 32.3349 17.9213L32.3349 22.079C32.3349 22.6121 32.6951 22.9991 33.1914 22.9991C33.3164 22.9991 33.4441 22.9742 33.5709 22.9249L39.4605 20.6374C39.93 20.455 40 20.1599 40 20.0001C40 19.8404 39.9298 19.5451 39.4604 19.3628Z' />
      <path d='M6.80868 22.9991C7.30502 22.9991 7.66528 22.6121 7.66528 22.0789V17.9212C7.66528 17.3881 7.30509 17.0011 6.80868 17.0011C6.68371 17.0011 6.55613 17.026 6.42927 17.0753L0.539542 19.3628C0.0701306 19.5451 0 19.8402 0 20C0 20.1598 0.0700653 20.4549 0.539542 20.6374L6.42914 22.9247C6.55607 22.974 6.68371 22.9991 6.80868 22.9991Z' />
    </svg>
  );
}
