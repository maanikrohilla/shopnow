import React, { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'


function Auth() {
    const [toggleAuth, settoggleAuth] = useState(false)
    return (
        <>
            <div className=" w-3/12 m-auto h-screen justify-center items-center flex flex-col gap-3">
                <div className="flex  gap-5 w-full">
                    <button onClick={() => settoggleAuth(!toggleAuth)} className='bg-red-700 py-2 px-4 text-white rounded-lg w-full'>
                        Login
                    </button>
                    <button onClick={() => settoggleAuth(!toggleAuth)} className='bg-red-700 py-2 px-4 text-white rounded-lg w-full'>
                        Signup
                    </button>
                </div>
                {
                    toggleAuth ? <Login /> : <Signup />
                }
            </div>
        </>
    )
}

export default Auth