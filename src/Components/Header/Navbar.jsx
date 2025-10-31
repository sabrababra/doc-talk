import React from 'react';
import { Link } from 'react-router';
import navIcon from '../../assets/images/navIcon.png'
import { useLocation } from 'react-router';

const Navbar = () => {
    const location=useLocation();
    const currentPath=location.pathname

    const getLinkClass=(path)=>{
       return currentPath===path?
        "font-bold text-black border-b-2 text-lg"
        :
        'text-lg font-medium text-[rgb(15,15,15,80%)] mx-3'

    }

    const link = <>
        
            <Link 
            className={getLinkClass('/')}
            to='/'>Home</Link>
        
        
            <Link 
            className={getLinkClass('/bookings')}
            to='/bookings'>Bookings</Link>
        
        
            <Link 
            className={getLinkClass('/contact')}
            to='/contact'>Contact</Link>
        
        
    </>
    return (
        <div>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link to='/' className=" flex items-center gap-2 text-3xl font-extrabold">
                        <img src={navIcon} alt="" className='w-12 h-12' />
                        Doctalk
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>

        
                </div >
    <div className="navbar-end">
        <a className="btn rounded-[99px] bg-[#176AE5] text-white font-bold text-xl py-6">Emergency</a>
    </div>
            </div >
        </div >
    );
};

export default Navbar;