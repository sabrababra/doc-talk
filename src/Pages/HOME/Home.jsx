import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BestDoctors from "../../Components/BestDoctors/BestDoctors.jsx";
import ServiceHistory from '../../Components/ServiceHistory/ServiceHistory.jsx';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BestDoctors/>
            <ServiceHistory/>
        </div>
    );
};

export default Home;