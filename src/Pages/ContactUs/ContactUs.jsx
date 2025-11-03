import React from 'react';
import bgImg from '../../assets/images/bannerImg.png'
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-6 w-10/12 mx-auto mt-20 items-center gap-5'>
            <div
                className="hero min-h-screen lg:col-span-3 rounded-2xl overflow-hidden"
                style={{
                    backgroundImage:
                        `url(${bgImg})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md bg-white p-5 rounded-2xl mb-[-300px] space-y-3">

                        <p className='text-[#176AE5] flex items-center gap-3'><IoCallOutline className='w-5 h-5' />
                            <span className='text-black font-bold'>010100011</span>
                        </p>
                        <p className='text-[#176AE5] flex items-center gap-3'><CgMail className='w-6 h-6' />
                            <span className='text-black font-bold'>doctalk@gmail.com</span>
                        </p>
                        <p className='text-[#176AE5] flex items-center gap-3'><FaLocationDot className='w-6 h-6' />
                            <span className='text-black font-bold'>654 Sycamore Avenue,Meadowville,WA 76543</span>
                        </p>


                    </div>
                </div>
            </div>
            <div className='lg:col-span-3'>
                <div className=' flex items-center justify-center'>
                    <div className='w-10/12'>
                        <h2 className='text-2xl lg:text-4xl font-bold mb-6 text-[#176AE5]'>Get In Touch</h2>
                        <form className='space-y-4'>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-32"></textarea>
                            <button className='btn bg-[#176AE5] text-white w-full'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;