import './globals.css'
import MainBar, {MainBarPrime} from './components/ui/MainBar'

import { Roboto, Akronim, Rubik_Glitch } from 'next/font/google'

   
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

const akronim = Akronim({
  weight: '400',
  subsets: ['latin'],
})

const rubik_glitch = Rubik_Glitch({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: 'Legendmind Library',
  description: 'My Referenc Code and Library',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className='flex w-full'>
          <div
            className={`${rubik_glitch.className} text-2xl w-full`}
          >
            {/* <MainBar /> */}
            <MainBarPrime />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
