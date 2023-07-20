import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import "./globals.css"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Your Random Words: Unleash creativity with word randomizer',
  description: 'Ignite your creativity with our word randomizer! Discover a universe of endless possibilities as we shuffle your word list with a single click. Uleash fresh ideas, enhance brainstorming sessions and add excitement to your writing. Embrace the power of randomness today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[url(/img/background.jpeg)] bg-cover bg-no-repeat bg-center h-screen">
      <Navbar/>
        {children}
        <div>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-GJFB5T4VQ4" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(argumetns);}
              gtag('js', new Date());

              gtag('config', 'G-GJFB5T4VQ4');
            `}
          </Script>
        </div>
      </body>
    </html>
  )
}
