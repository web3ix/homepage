/* eslint-disable @next/next/no-document-import-in-page */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={process.env.NODE_ENV === 'development' && 'dev'}>
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="https://web3ix.com/fonts/GTAlpina-ThIt.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://web3ix.com/fonts/MessinaSansMono-Regular.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://web3ix.com/fonts/MessinaSansMono-SemiBold.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://web3ix.com/fonts/NeueMontreal-Bold.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://web3ix.com/fonts/NeueMontreal-Light.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://web3ix.com/fonts/NeueMontreal-Regular.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        {/* // https://github.com/donavon/use-dark-mode */}
        {/* <script src="./noflash.js" /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
