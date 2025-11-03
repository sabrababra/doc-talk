import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import regIcn from '../../assets/images/regIcon.png'
import { addToStoreDB } from '../../Components/Utilities/AddToDB';

const DoctorDetail = () => {

    const { reg } = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("/doctors.js")
            .then(res => res.json())
            .then(data => {
                const doctor = data.find(x => x.registrationNumber == reg);
                setDoctors(doctor)
            })
    }, [reg]);



    const handleAddAppointment = (reg) => {
        addToStoreDB(reg)
    }


    return (
        <div className='mt-10 w-10/12 mx-auto'>
            <div className='bg-white rounded-3xl p-5 space-y-3'>
                <h1 className=' text-2xl lg:text-4xl font-extrabold text-center'>Doctor’s Profile Details</h1>
                <p className='text-center text-sm lg:text-base font-medium text-[rgb(20,20,20,70%)]'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='bg-white rounded-3xl p-8 space-y-3 mt-5 flex flex-col md:flex-row lg:flex-row items-start gap-5'>
                <img className='w-[350px] rounded-2xl h-[370px] object-cover' src={doctors?.image} alt="" />
                <div className='space-y-4'>
                    <div className='space-y-2'>
                        <h1 className=' text-xl lg:text-3xl font-extrabold'>{doctors?.name}</h1>
                        <h4 className='text-[rgb(15,15,15,60%)] text-base lg:text-lg font-medium w-2/12'>{doctors?.education}</h4>
                    </div>
                    <div>
                        <p><span className='text-[rgb(15,15,15,50%)] font-medium text-sm lg:text-[20px]'>Working at</span>
                            <br />
                            <span className='text-sm lg:text-[20px] font-bold'>{doctors?.working}</span>
                        </p>
                    </div>
                    <div className='border border-dashed border-[rgb(15,15,15,20%)]'></div>
                    <div>
                        <p className='flex items-center  gap-3'>
                            <img src={regIcn} alt="" />
                            <span className='text-sm lg:text-lg'>{doctors?.registrationNumber}</span>
                        </p>

                    </div>
                    <div className='border border-dashed border-[rgb(15,15,15,20%)]'></div>
                    <div className='space-y-2'>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                            <span className='text-sm lg:text-base font-bold'>Availability</span>
                            <div className='grid grid-cols-2 lg:grid-cols-6 gap-3 '>
                                {
                                    doctors?.availableDays?.map((day, idx) => <button
                                        key={idx}
                                        className='btn ml-3 rounded-4xl bg-[rgb(255,160,0,10%)] border-[rgb(255,160,0,20%)] text-[#FFA000] text-xs lg:text-sm font-medium'>
                                        {day}
                                    </button>)
                                }
                            </div>
                        </div>
                        <p>
                            <span className='text-sm lg:text-base font-extrabold mr-2'>Consultation Fee:</span>
                            <span className='text-sm lg:text-base font-extrabold text-[#176AE5]'>Taka:{doctors.visitFee}</span>
                            <span className='text-sm lg:text-base text-[rgb(20,20,20,50%)] font-medium'> (incl. Vat) </span>
                            <span className='text-sm lg:text-base text-[#176AE5] font-medium'>Per consultation</span>
                        </p>
                    </div>
                </div>

            </div>

            <div className='bg-white rounded-3xl p-5 space-y-3 mt-5'>
                <h1 className='text-xl lg:text-2xl font-extrabold text-center'>Book an Appointment</h1>
                <div className='border border-dashed border-[rgb(15,15,15,20%)]'></div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-sm lg:text-base font-bold'>Availability</h1>
                    <button className={`btn rounded-4xl  ${doctors?.availableDays?.includes(
                        new Date().toLocaleString('en-US', { weekday: 'long' })
                    )
                        ? 'bg-green-100 text-green-700 border-green-300 text-sm lg:text-base'
                        : 'bg-red-100 text-red-700 border-red-300 text-sm lg:text-base'
                        }`}>
                        {
                            doctors?.availableDays?.includes(
                                new Date().toLocaleString('en-US', { weekday: 'long' })
                            )
                                ? 'Doctor Available Today'
                                : 'Not Available Today'
                        }
                    </button>
                </div>
                <div className='border border-dashed border-[rgb(15,15,15,20%)]'></div>
            </div>
            <div>
                <Link to='/bookings'>
                    <button
                        onClick={() => handleAddAppointment(doctors.registrationNumber)}
                        disabled={
                            !doctors?.availableDays?.includes(
                                new Date().toLocaleString('en-US', { weekday: 'long' })
                            )
                        }
                        className={`text-sm lg:text-base font-bold rounded-4xl w-full py-2 mt-5 transition-colors duration-300 ${doctors?.availableDays?.includes(
                            new Date().toLocaleString('en-US', { weekday: 'long' })
                        )
                                ? 'bg-[#176AE5] text-white hover:bg-blue-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Book Appointment Now
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default DoctorDetail;