import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorDetail = () => {
    const { reg } = useParams();
    console.log("reg:",reg);
    
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch("/doctors.js")
        .then(res=>res.json())
        .then(data=>{
            const doctor=data.find(x=>x.registrationNumber==reg);
            setDoctors(doctor)
        })
    },[reg]);

    
    console.log(doctors);

    return (
        <div className='mt-10 w-10/12 mx-auto'>
            <div className='bg-white rounded-3xl p-5 space-y-3'>
                <h1 className='text-3xl font-extrabold text-center'>Doctor’s Profile Details</h1>
                <p className='text-center text-base font-medium text-[rgb(20,20,20,70%)]'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='bg-white rounded-3xl p-5 space-y-3'>
                <img src={doctors.image} alt="" />

            </div>
        </div>
    );
};

export default DoctorDetail;