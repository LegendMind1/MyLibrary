'use client'
import Image from 'next/image'
import React from 'react'

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
