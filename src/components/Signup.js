import React from 'react'

function Signup() {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <input type="text" placeholder='Name'  className='border p-2 w-full outline-none border-black rounded-md'/>
            <input type="email" placeholder='Email'  className='border p-2 w-full outline-none border-black rounded-md'/>
            <input type="number" placeholder='Phone'  className='border p-2 w-full outline-none border-black rounded-md'/>
            <input type="text" placeholder='Password'  className='border p-2 w-full outline-none border-black rounded-md'/>
            <button className='bg-red-700 py-2 px-4 text-white rounded-lg w-full'>Submit</button>
        </div>
    )
}

export default Signup