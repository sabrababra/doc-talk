import React, { useEffect, useState } from 'react';
import BestDoctor from '../BestDoctor/BestDoctor';

const BestDoctors = () => {
    const [doctors,setDoctors]=useState([]);
    const [showAll,setShowAll]=useState(false);

    useEffect(()=>{
        fetch("doctors.js")
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])

    const visibleDoctors=showAll ? doctors : doctors.slice(0,6);

    const showAllDoctor=()=>{
        setShowAll(true)
        doctors.map(doctor=><BestDoctor
        key={doctor.id}
        doctor={doctor}

        />)
        toggle()
    }

    const toggle=()=>{
        setShowAll(!showAll)
    }


    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='text-center text-[#0F0F0F] w-10/12 mx-auto space-y-3'>
                <h1 className='font-extrabold text-4xl'>Our Best Doctors</h1>
                <p className='text-base'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    visibleDoctors.map(doctor=><BestDoctor
                    key={doctor.id}
                    doctor={doctor}
                    />)
                }
            </div>
            <div className='text-center'>
            <button 
            onClick={showAllDoctor}
            className='btn bg-[#176AE5] text-white text-sm rounded-4xl font-bold mt-5 '>{showAll ? "View Less" : "View All Doctors"}</button>
            </div>
        </div>
    );
};

export default BestDoctors;