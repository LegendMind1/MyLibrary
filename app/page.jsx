'use client'
import { Inter } from 'next/font/google'
import MainBar from './components/ui/MainBar'
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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className='flex w-full'>
        <div
          className={`${rubik_glitch.className} text-2xl`}
        >
          <MainBar />
        </div>
      </header>
      <div>
        <ul className='font-fasthand text-lg p-4 text-red-800'>
          <li>Added through Tailwind after importing in globals.css @import url('https://fonts.googleapis.com/css2?family=Fasthand&display=swap')</li>
        </ul>
      </div>

      <div className='font-bafora text-3xl'>
        This is amazing...  The Bafora Font stored locally
      </div>
      <div className='font-RetroCool text-3xl'>
        This is amazing...  The RetroCool Font stored locally
      </div>
      <div className='font-IvoryEmery text-[70px]'>
        This is amazing...  The RetroCool Font stored locally
      </div>
    </>
  )
}
