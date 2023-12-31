import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"/>
      </Head>
      <body>
      {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link> */}
      <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet"></link>
      {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Zen+Maru+Gothic&display=swap" rel="stylesheet"></link> */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Zen+Maru+Gothic:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;900&family=Zen+Maru+Gothic:wght@400;700&display=swap" rel="stylesheet"></link>
      
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
