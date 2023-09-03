'use client'
import { MyContext } from '@/app/layout';
import React from 'react'
import { useContext } from 'react'
import {useState} from 'react'

export default function TestForm() {
    const useMyContext = useContext(MyContext);

  const [username, setUsername] = useState('')
  const [userage, setUserage] = useState('')

  const handler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const dataObject  = Object.fromEntries(formData)

    useMyContext.abc = username

    console.log ("DataObject Username = " + dataObject.username)
    console.log ("State Username = " + username)

    console.log ("UseContext Username = " + useMyContext.abc)

  }

  
    return (
    <>
         <div className='flex justify-center mt-6'>
      <div  className='bg-orange-400 h-[200px] w-[50%] flex justify-center items-center max-md:flex-col'>

        <form className='flex flex-col w-[80%]' onSubmit={handler}>
          <label htmlFor='username'>Enter Name</label>
          <input name='username' id='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
          <label htmlFor='userage'>Enter Age</label>
          <input name='userage' id='userage' value={userage} onChange={(e)=>setUserage(e.target.value)} />
          <div className='flex justify-center mt-4'>
            <input type='submit' className='bg-red-500 w-[25%] rounded-full text-white font-RetroCool' value={"Submit"} />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
