import React, { useState } from 'react'
function Login() {
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
 
  return (
    <>
      <div className='flex flex-col gap-5 w-full'>
        <input type="email" placeholder='Email' value={email}onChange={(e)=>setEmail(e.target.value)} className='border p-2 w-full outline-none border-black rounded-md' />
        <input type="text" placeholder='Password' value={password}onChange={(e)=>setPassword(e.target.value)} className='border p-2 w-full outline-none border-black rounded-md' />
        <button className='bg-red-700 py-2 px-4 text-white rounded-lg w-full'>Login</button>
      </div> 
    </>
  )
}

export default Login