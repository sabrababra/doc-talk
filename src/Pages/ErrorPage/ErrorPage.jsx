import React from 'react';
import errorImg from '../../assets/images/error.png'

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
            <img className='' src={errorImg} alt="" />
            <h1 className='text-3xl font-extrabold text-red-500 text-center'>404-Page Not Found</h1>
            <p className='text-base text-[rgb(15,15,15,50%)]'>Oops!!The page you're looking for doesn't exist</p>
        </div>
    );
};

export default ErrorPage;