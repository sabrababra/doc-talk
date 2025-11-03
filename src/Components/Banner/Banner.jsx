import React from 'react';
import bannerImg from '../../assets/images/bannerImg.png'

const Banner = () => {
    return (
        <div className='bg-linear-to-b from-[#FFFFFF00] to-[#FFFFFFFF] w-11/12 border-2 rounded-3xl border-white mx-auto px-10 lg:px-40 py-16 space-y-4 my-10'>
            <div className='space-y-4'>
                <h1 className='font-extrabold text-2xl lg:text-4xl text-center w-full lg:w-10/12 mx-auto'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='text-sm lg:text-base font-medium text[#0F0F0F] text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                < div className='text-center flex flex-col md:flex-col lg:flex-row justify-center gap-5 items-center'>
                            <input type="text" placeholder="search any doctor..." className="input rounded-4xl" />
                    <button>
                        <a className="btn rounded-[99px] bg-[#176AE5] text-white font-bold lg:text-lg text-sm px-6">Search Now</a>
                    </button>
                </div>
            </div>
        <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-5 mt-10'>
            <img className='w-[500px]' src={bannerImg} alt="" />
            <img className='w-[500px]' src={bannerImg} alt="" />
        </div>
        </div>
    );
};

export default Banner;