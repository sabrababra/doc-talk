import React from 'react';
import regIcon from '../../assets/images/regIcon.png';
import { Link } from 'react-router';

const BestDoctor = ({ doctor }) => {
    const { image, status, experience, name, education, registrationNumber } = doctor
    return (
        <div className='bg-white rounded-2xl p-5 space-y-5 mt-5'>
            <img className='w-full h-[200px] object-cover rounded-2xl mx-auto' src={image} alt="" />

            <div className='space-x-2 flex items-center '>
                <button className={`btn rounded-4xl font-medium ${status === "available" ? "bg-[rgb(9,152,47,10%)] border-[rgb(9,152,47,20%)] text-sm text-[#09982F]" : "bg-[rgba(233,6,25,0.1)] border-[rgba(233,6,25,0.2)] text-sm text-[rgba(233,6,25)]"}`} >{status}</button>

                <button className='rounded-4xl bg-[rgb(23,106,229,10%)] border-[rgb(23,106,229,20%)] text-[#176AE5] text-sm font-medium btn'>
                    {experience}
                </button>
            </div>
            <p className='font-extrabold text-xl'>{name}</p>
            <p className='font-medium text-base text-[rgb(15,15,15,60%)]'>{education}</p>
            <div className='border border-dashed border-[rgb(15,15,15,20%)]'></div>
            <p className='flex items-center gap-1 text-base font-medium text-[rgb(15,15,15,70%)]'>
                <img src={regIcon} alt="" />
                Reg No: {registrationNumber}
            </p>

            <Link to={`/doctor-details/${registrationNumber}`}>
                <button className='btn rounded-4xl border-[#176AE5] w-full bg-white text-lg font-bold text-[#176AE5] hover:text-white hover:bg-[#176AE5]'>View Details</button>
            </Link>

        </div>
    );
};

export default BestDoctor;