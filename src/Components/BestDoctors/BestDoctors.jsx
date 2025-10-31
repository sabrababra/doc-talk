import React, { useEffect, useState } from 'react';
import BestDoctor from '../BestDoctor/BestDoctor';

const BestDoctors = () => {
    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        fetch("doctors.js")
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])


    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='text-center text-[#0F0F0F] w-10/12 mx-auto space-y-3'>
                <h1 className='font-extrabold text-5xl'>Our Best Doctors</h1>
                <p className='text-base'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div>
                {
                    doctors.map(doctor=><BestDoctor
                    key={doctor.id}
                    doctor={doctor}
                    />)
                }
            </div>
        </div>
    );
};

export default BestDoctors;