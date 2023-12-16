import './globals.css'
import Header from './components/Header'
import Providers from './components/Providers'


export const metadata = {
  title: 'SwiftNews',
  description: 'News App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <Providers>
          <Header />
          <div className='max-w-6xl mx-auto'>
            {children}
          </div>
          </Providers>
        </body>
      
    </html>
  )
}
