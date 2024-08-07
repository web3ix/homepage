import { Cursor, Scrollbar } from '@studio-freight/compono'
import { useDebug } from '@studio-freight/hamo'
import cn from 'clsx'
import { CustomHead } from 'components/custom-head'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import dynamic from 'next/dynamic'

import s from './layout.module.scss'

const Orchestra = dynamic(
  () => import('lib/orchestra').then(({ Orchestra }) => Orchestra),
  { ssr: false },
)

export function Layout({
  seo = {
    title: 'Web3ix Labs - Build on Principle',
    description: 'Web3ix is an independent blockchain lab built on principle.',
    image: { url: 'https://web3ix.com/sf-og.jpg' },
    keywords: [
      'web3ix',
      'blockchain',
      'web3',
      'dapps',
      'defi',
      'decentralized',
      'code',
      'hashtag',
      'development',
      'website',
      'websitedevelopment',
      'webservices',
      'strategy',
      'web',
      'bot',
    ],
  },
  children,
  theme = 'dark',
  className,
  principles,
  footerLinks,
  studioInfo,
  contactData,
}) {
  const debug = useDebug()

  return (
    <>
      <CustomHead {...seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Web3ix Labs',
            alternateName: ['Web3ix'],
            url: 'https://web3ix.com/',
          }),
        }}
      />

      <div className={cn(`theme-${theme}`, s.layout, className)}>
        <Cursor />
        <Scrollbar />
        <Header principles={principles} contact={contactData} />
        <main className={s.main}>{children}</main>
        <Footer links={footerLinks} studioInfo={studioInfo} />
      </div>

      {debug && (
        <>
          <Orchestra />
        </>
      )}
    </>
  )
}
