import React, { useEffect, useState } from 'react';
import { getAppointment, removeFromStoreDB } from '../../Components/Utilities/AddToDB';
import Swal from 'sweetalert2';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router';

// Triangle shape for bars
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ['#3b82f6', '#facc15', '#14b8a6', '#f97316', '#ec4899', '#8b5cf6'];

const BookingWithGraph = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetch('/doctors.js')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    const appointments = getAppointment();
    const filterAppointment = doctors.filter((doctor) =>
      appointments.includes(doctor.registrationNumber)
    );
    setAppointmentList(filterAppointment);
  }, [doctors]);

  const handleDelete = (reg) => {
    Swal.fire({
      title: 'Cancel this appointment?',
      text: "You won't be able to recover it later.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = appointmentList.filter((item) => item.registrationNumber !== reg);
        setAppointmentList(updatedList);
        removeFromStoreDB(reg);
        Swal.fire('Cancelled!', 'Your appointment has been successfully cancelled.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Safe!', 'Your appointment is still active.', 'info');
      }
    });
  };

  // Prepare chart data
  const chartData = appointmentList.map((item, index) => ({
    name: item.name,
    fee: item.visitFee,
    fill: colors[index % colors.length],
  }));

  return (
    <div className="w-10/12 mx-auto mt-10">
      {appointmentList.length > 0 &&
        <>
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">Today's Appointments</h1>
          <div className="mt-8 w-full h-80 bg-white p-5 rounded-2xl">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="fee"
                  shape={(props) => <TriangleBar {...props} fill={props.payload.fill} />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      }

      <div className="mt-10">
        {appointmentList.length > 0 ?
          (
            appointmentList.map((item) => (<div
              key={item.registrationNumber}
              className="bg-white p-6 rounded-2xl my-6 shadow-lg transition hover:shadow-xl duration-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{item.name}</h1>
                  <p className="text-base text-gray-600">{item.education}</p>
                </div>
                <p className="text-lg text-gray-700 font-semibold">
                  Appointment Fee: <span className="text-[#f97316]">{item.visitFee}</span> Taka + Vat
                </p>
              </div>

              <div className="border border-dashed border-gray-300 my-4"></div>

              <button
                onClick={() => handleDelete(item.registrationNumber)}
                className="text-lg font-semibold text-[#FF0000] border border-[#FF0000] rounded-full py-2 w-full mt-3 hover:text-white hover:bg-[#FF0000]"
              >
                Cancel Appointment
              </button>
            </div>
            )))
          :
          (<div className='min-h-[60vh] flex flex-col  items-center justify-center space-y-4'>
            <h1 className='text-3xl font-extrabold text-center'>You Have not Booked any appointment yet</h1>
            <p className="text-center text-lg text-gray-500">If you want go back to the home page and take appointment as your choice</p>
            <Link to='/'>
              <button className='text-base font-bold text-white rounded bg-[#176AE5] py-5 px-5 btn  mt-5'>Book an Appointment</button>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default BookingWithGraph;
