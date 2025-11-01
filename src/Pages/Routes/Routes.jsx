import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HOME/Home";
import DoctorDetail from "../DoctorDetail/DoctorDetail";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:ErrorPage,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/doctor-details/:reg',
                Component:DoctorDetail
            }
        ]
    }
])