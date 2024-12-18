import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
        <Navbar/>
        <br /><br /><br /><br />
            <div className='flex justify-center h-[480px] '>
                <div className="w-[320px] ">
                    <div className="">
                        <form method="">

                            <h1 className="font-bold text-3xl">Contact</h1>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                />
                                <br />
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                />
                                <br />
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <span>Massege</span>
                                <br />
                                <textarea name="postContent" className='border outline-none' placeholder='enter your messege' rows={4} cols={40} />
                                <br /><br />
                            </div>
                            {/* Button */}
                            <div className="mt-4">
                                <Link to="/" className="bg-blue-500 text-xl text-white rounded-md px-4 py-3 hover:bg-blue-700 duration-200">
                                    Messege
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact