'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

//--------For Main Bar Prime ------------
import { PrimeReactProvider } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import {InputText} from 'primereact/inputtext'

//Icon Library
import 'primeicons/primeicons.css';
//theme
import "primereact/resources/themes/noman/theme.css";    
//core
import "primereact/resources/primereact.min.css";  
import { Blaka } from 'next/font/google';


export default function MainBar() {
  return (
    
    <div> {/*Container Div */}

        <div className='flex w-screen top-0 h-[125px] pl-4 bg-gray-800 shadow-sm shadow-slate-700 mygradientBlue'> {/* Menu Bar Bg Color */}
            
            <div className='flex w-full justify-between'> {/* Menu Bar Content Container */}
                
                <div className='px-8 pt-4'>
                    
                    <Image 
                        src={`/images/library.png`} 
                        width={90} 
                        height={90}
                        className='flex rounded-full p-2 items-center transition-opacity opacity-0 duration-[2s] shadow-slate-900 shadow-lg border-2 border-white'
                        onLoadingComplete={(image) => image.classList.remove('opacity-0')} 

                    />
                </div>
                

                <div className='w-1/2 mr-[3vw]'> {/* Bar Text Container */}

                    <div className='items-center flex h-full w-full'> {/* Bar Text Alignment Control */}
                
                        <ul className='mainmenuText flex w-full justify-between'>
                            <li className='xx'>
                                Home     
                            </li>
                            <li>
                                Notes
                            </li>
                            <li className='xx'>
                                Components
                            </li>
                        </ul>

                    </div> {/* Bar Text Alignment Controller End */}

                </div> {/* Bar Text Container End*/}

            </div> {/* Menu Bar Content Container End */}
        
        </div> {/* Menu Bar Bg Color End */}
            
    
    {/*Container Div End */}
    </div> 

  )
}

function matchme(){
    alert ('yeah')
}

export function MainBarPrime (){
    const router = useRouter();
    const items = [
        {
            label: 'Home',
            /* icon: 'pi pi-fw pi-home', */
            icon: <img alt="home icon" className='mr-3' src="images/home.png" width={32} height={32} />,
            command: (()=>router.push('/'))
        },
        {
            label: 'Explore',
            icon: 'pi pi-fw pi-car',
            items: [
                {
                    label: 'Ideas',
                    /*icon: 'pi pi-fw pi-bolt',*/
                    icon: <img alt="library icon" className='mr-3' src="images/library.png" width={28} height={28} />,
                    command : (()=>router.push('/ideas'))

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash',
                    command:(()=>matchme())
                    
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

        const start = 
            <>
             
              <div className='px-8 pt-2'>
                    
                    <Image 
                        src={`/images/library.png`} 
                        width={80} 
                        height={80}
                        className='flex rounded-full p-2 items-center transition-opacity opacity-0 duration-[2s] shadow-slate-900 shadow-lg border-2 border-white'
                        onLoadingComplete={(image) => image.classList.remove('opacity-0')} 

                    />
                </div>
            </>
        const end = 
                <>
                    <div className='ml-56 max-md:ml-16 w-[280px] max-md:w-[220px] flex-col'>
                        <div className='flex'>
                            <InputText placeholder="Search" type="text" className='w-full h-[36px]' />
                        </div>
                        <div className='flex justify-around mt-2'>
                            <button className='bg-slate-500 rounded-full text-red-800 text-lg font-RetroCool w-[80px] shadow-md shadow-black hover:bg-yellow-500'>Login</button>
                            <button className='bg-yellow-500 rounded-full text-red-800 text-lg font-RetroCool w-[80px] shadow-md shadow-black'>Signup</button>
                        </div>
                    </div>
                </>
    return (
        <PrimeReactProvider>
            <div className="flex w-full shadow-sm shadow-[#222831]">
                <Menubar model={items} start={start} end={end} />
            </div>
        </PrimeReactProvider>
    )
}
