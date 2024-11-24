import React, { useState } from 'react'
import { BASE_URL } from '../constant/index'

function Signup() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("") 
 
    const handleSignup = async () => {
        try {
            const response = fetch(`${BASE_URL}/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password, phone
                })
            })
            let data = await response.json()
            if(data.success){
                alert(data.message)
            } 

        } catch (error) {
            console.error(error);

        }

        setName("")
        setEmail("")
        setPhone("")
        setPassword("")

    }
    return (
        <div className='flex flex-col gap-5 w-full'>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='border p-2 w-full outline-none border-black rounded-md' />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 w-full outline-none border-black rounded-md' />
            <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} className='border p-2 w-full outline-none border-black rounded-md' />
            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 w-full outline-none border-black rounded-md' />
            <button className='bg-red-700 py-1 px-4 text-white rounded-lg' onClick={handleSignup}>Submit</button>
        </div>
    )
}

export default Signup