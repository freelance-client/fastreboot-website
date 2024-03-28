import React from 'react'

import { FaInstagramSquare, FaLinkedin, FaYoutube, FaWhatsappSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className='container mx-auto  w-full h-auto'>
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold my-4 mx-8 text-center">Need someone to talk to?</h1>
            <div className=' flex  justify-center  flex-wrap gap-14'>
                <div className='flex flex-col gap-4 items-center w-3/4 sm:w-1/2 '>
                    <h1 className=' text-xl md:text-2xl lg:text-3xl my-4 text-gray-700'>// Reach out to us</h1>
                    <input type="text" placeholder='Your Name *' className=' bg-transparent rounded-md pl-1 ring-1 w-64 h-8 ring-green-600' />
                    <input type="text" placeholder='Your Email *' className=' bg-transparent rounded-md px-1 ring-1 w-64 h-8 ring-green-600' />
                    <input type="text" placeholder='How can we assist you?' className=' bg-transparent rounded-md px-1 w-64 h-8 ring-1 ring-green-600' />
                    <input type="text" placeholder='Write your message...' className=' bg-transparent rounded-md px-1 w-64 h-24 ring-1 ring-green-600' />
                    <button className=' ring-1 rounded-md w-14 '>Send</button>
                </div>
                <div className='flex flex-col gap-4 items-center sm:w-64 md:w-80 text-left sm:text-center py-5 '>
                    <h4 className=' text-xl md:text-2xl lg:text-3xl text-gray-700'>//Contact Information</h4>
                    <h2 className=' text-lg md:text-xl lg:text-xl font-semibold '>Mail us at : tfgfastreboot@gmail.com</h2>
                    <h2 className=' text-lg md:text-xl lg:text-xl font-semibold '>Call us at : +91 8848365986</h2>
                    <h1 className='text-base md:lg lg:text-xl text-gray-700'>//Connect with us on social media</h1>
                    <div className=' flex gap-3'>
                        <a href="">
                            <div><FaInstagramSquare className=' h-8 w-8 text-gray-700 hover:text-gray-500' />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/akshay-k-tfg/">
                            <div><FaLinkedin className=' h-8 w-8 text-gray-700 hover:text-gray-500' /></div>
                        </a>
                        <a href="">
                            <div><FaYoutube className=' h-8 w-8 text-gray-700 hover:text-gray-500' /></div>
                        </a>
                        <a href="">
                            <div><FaWhatsappSquare className=' h-8 w-8 text-gray-700 hover:text-gray-500' /></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
