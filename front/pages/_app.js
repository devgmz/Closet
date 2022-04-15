import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head';

function MyApp( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <title>Closet</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
