import Head from 'next/head';

export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
