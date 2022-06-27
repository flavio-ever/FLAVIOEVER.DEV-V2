import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Flavio Ever . Dev</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta name="description" content="Portfolio e Blog" />

        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#1B1C1F" />

        {/* ios */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
