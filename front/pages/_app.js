import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head';

import { wrapper } from '../store/index';

function MyApp( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <title>Closet</title>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux( MyApp );
