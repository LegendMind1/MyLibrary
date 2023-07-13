'use client'
import Image from 'next/image'
import React from 'react'


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


export function MainBarPrime (){

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
                    <div className='w-full ml-48'>
                        <div>
                            <InputText placeholder="Search" type="text" className='w-[300px]' />
                        </div>
                        <div className='flex justify-around w-1/2 mt-2'>
                            <button className='bg-slate-500 rounded-full text-red-800 text-lg font-RetroCool w-[80px] hover:bg-yellow-600'>Login</button>
                            <button className='bg-yellow-500 rounded-full text-red-800 text-lg font-RetroCool w-[80px]'>Signup</button>
                        </div>
                    </div>
                </>
    return (
        <PrimeReactProvider>
            <div className="flex w-full shadow-sm shadow-[#222831] rounded-b-[70px] overflow-clip">
                <Menubar model={items} start={start} end={end} />
            </div>
        </PrimeReactProvider>
    )
}
