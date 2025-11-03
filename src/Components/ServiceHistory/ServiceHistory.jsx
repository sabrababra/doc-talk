import React from 'react';
import image1 from '../../assets/images/serviceCardImg1.png'
import image2 from '../../assets/images/serviceCardImg2.png'
import image3 from '../../assets/images/serviceCardImg3.png'
import image4 from '../../assets/images/serviceCardImg4.png'
import CountUp from 'react-countup';

const ServiceHistory = () => {
    const cardData = [
        {
            id:1,
            image: image1,
            title: "Total Doctors",
            number: 199
        },
        {
            id:2,
            image: image2,
            title: "Total Reviews",
            number: 467
        },
        {
            id:3,
            image: image3,
            title: "Patients",
            number: 1900
        },
        {
            id:4,
            image: image4,
            title: "Total Stuffs",
            number: 300
        },
    ]

    return (
        <div className='mt-20 space-y-3 w-10/12 mx-auto'>
            <h1 className='text-center font-extrabold text-2xl lg:text-4xl'>We Provide Best Medical Services</h1>
            <p className=' text-sm lg:text-base text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {
                    cardData.map(card => <div 
                    key={card.id}
                    className='bg-white rounded-2xl p-5 space-y-3 flex flex-col items-center justify-center lg:items-start'>
                        <img src={card.image} alt="" />
                        <h1 className='font-extrabold text-3xl lg:text-5xl'>
                            <CountUp
                            start={card.number-150}
                            end={card.number}
                            duration={8}
                            />
                            +
                            
                        </h1>
                        <p className='text-[rgb(15,15,15,60%)] text-lg lg:text-xl font-semibold'>{card.title}</p>
                    </div>)
                }
                
            </div>
        </div>

    );
};

export default ServiceHistory;