import React from 'react'
import Sidebar from '../components/Sidebar'

function Dashboard() {
    return (
        <>
            <div className="flex">
                <div className="p-4 bg-black min-h-screen w-72 rounded-e-2xl">
                    <Sidebar/>
                </div>
                <div className="">

                </div>
            </div>
        </>
    )
}

export default Dashboard