import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './Utilities/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lovinime',
  description: 'Portal Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
