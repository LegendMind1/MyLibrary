
import { MyContext } from '@/app/layout'
import React from 'react'
import { useContext } from 'react'


export default function TestComponent() {

    const useMyContext = useContext(MyContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const dataObject  = Object.fromEntries(formData)
        useMyContext.abc = dataObject.name
        console.log ("New Value for useMyContext is " + useMyContext.abc)
    } 

    return (
    <>
        <div className='text-red-700 font-RetroCool text-2xl'>TestComponent</div>
            <div>
                {useMyContext.abc}
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>Click to Update The Context Variable Again...!</div>
                    <input type='text' id='name' name='name' />
                    <input type='submit' id='btn' name='btn' value={"Submit"} />
                </form>
            </div>
    </>
  )
}
