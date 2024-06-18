import Head from "next/head";
import "../styles/globals.css";
import { Manrope } from '@next/font/google'

const manrope = Manrope({subsets: 'latin', weight: 'variable'})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp;
