import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HOME/Home";
import DoctorDetail from "../DoctorDetail/DoctorDetail";
import Booking from "../Booking/Booking";
import DetailsError from "../DetailsError/DetailsError";
import ContactUs from "../ContactUs/ContactUs";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/doctor-details/:reg',
                errorElement:<DetailsError/>,
                Component:DoctorDetail
            },
            {
                path:'/bookings',
                Component:Booking
            },
            {
                path:"/contact",
                Component:ContactUs
            }
        ]
    }
])