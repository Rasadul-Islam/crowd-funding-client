import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-10 pb-20 bg-purple-200 to-white p-5 border-t-2 '>
            <div className='text-center my-10'>
                <Link to="/" className='text-2xl md:text-3xl lg:text-4xl font-bold text-purple-500'>PullUp</Link>
                <p className='mt-5 text-gray-500 text-base md:text-lg'>Building a Better Tomorrow, <span className='text-blue-400 font-bold'>Together.</span></p>
            </div>
            <hr className='border-black' />
            <div className='grid grid-cols-2 md:grid-cols-3 my-5 '>
                <div className='text-center'>
                    <h1 className='font-bold text-lg mb-5 '>Quick Links</h1>
                    <ul className='text-gray-500'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>All Campaigns</a></li>
                        <li><a href='#'>My Campaigns</a></li>
                        <li><a href='#'>My Donations
                        </a></li>
                        <li><a href='#'>Contact Us
                        </a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-lg mb-5 '>About Us</h1>
                    <ul className='text-gray-500'>
                        <li><a href='#'>About PullUp</a></li>
                        <li><a href='#'>How It Works</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className='text-center col-span-2 md:col-span-1'>
                    <h1 className='font-bold text-lg mb-5 '>Stay Connected</h1>
                    <ul className='flex md:flex-col gap-3 text-gray-400 text-4xl items-center justify-center'>
                        <li><a href='#' className='text-[#1877F2]'><FaFacebook /></a></li>
                        <li><a href='#' className='text-[#FF0000]' ><FaYoutube /></a></li>
                        <li className="bg-gradient-to-b from-blue-500 via-red-500 to-yellow-500 rounded-xl"><a href='#' className="text-white"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <hr className='border-black' />
            <h1 className='text-center mt-2'>© [2025] PullUp. All rights reserved.</h1>
        </div>
    );
};

export default Footer;