'use client'
import { Inter } from 'next/font/google'
import MainBar from './components/ui/MainBar'
import { Roboto, Akronim, Rubik_Glitch } from 'next/font/google'
import { Menubar } from 'primereact/menubar';
import {InputText} from 'primereact/inputtext'

import { PrimeReactProvider } from 'primereact/api';

import 'primeicons/primeicons.css';

//theme
import "primereact/resources/themes/noman/theme.css";    
    
//core
import "primereact/resources/primereact.min.css";        


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

      const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

const start = <div className='w-[36px] h-[36px]'>
              <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>
            </div>
const end = <InputText placeholder="Search" type="text" className="w-full" />;


  return (
    <>

      <header className='flex w-full'>
        <div
          className={`${rubik_glitch.className} text-2xl`}
        >
          <MainBar />
          
        </div>
      </header>
      <PrimeReactProvider>
        <div className="flex w-full">
          <Menubar model={items} start={start} end={end} className='w-full' />
        </div>
      </PrimeReactProvider>
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

      <div className='font-RetroCool text-blue-900 text-[42px] flex border-2 border-red-600'>
        <p className='border-2 text-center w-full border-yellow-400'>Prime React in Action</p>
      </div>
    </>
  )
}
