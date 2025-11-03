import React from 'react';
import { Link, useParams } from 'react-router';
import regIcon from '../../assets/images/regIcon.png';

const DetailsError = () => {
    const { reg } = useParams();
    console.log(reg);
    return (
        <div className='w-10/12 mx-auto mt-20 '>
            <div className='bg-white rounded-2xl px-5 py-8 space-y-3 '>
                <h1 className='text-3xl font-extrabold text-center'>No Doctor Found!!</h1>
                <p className='text-base text-[rgb(15,15,15,50% text-center'>No Doctor found with this registration No-
                </p>
                <span className='flex items-center gap-1 text-black text-center justify-center'>
                    <img src={regIcon} alt="" />
                    {reg}
                </span>
                <Link to='/' className='flex justify-center items-center my-10'><button className='text-white bg-[#176AE5] btn '>
                    View All Doctors
                </button></Link>
            </div>

        </div>
    );
};

export default DetailsError;