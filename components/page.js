import Head from 'next/head';
import theme from '../theme/theme.module.css';

export default function Page({ title = '', darkMode, className, children }) {
  return (
    <>
      <Head>
        <title>Hack a Tweet{title}</title>
      </Head>
      <main
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100vh',
        }}
        className={`${className} ${darkMode ? theme.dark : theme.light}`}>
        {children}
      </main>
    </>
  );
}
