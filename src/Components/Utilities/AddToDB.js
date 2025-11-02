import Swal from "sweetalert2";

const getAppointment = () => {
  const storeAppointment = localStorage.getItem("appointmentList");
  if (storeAppointment) {
    const storeAppointmentData = JSON.parse(storeAppointment);
    return storeAppointmentData;
  } else {
    return [];
  }
};

const addToStoreDB = (reg) => {
  const storeAppointmentData = getAppointment();
  if (storeAppointmentData.includes(reg)) {
    Swal.fire({
      icon: "error",
      title: "Sorry...",
      text: "Appointment already schedule for today!!",
    });
  } else {
    storeAppointmentData.push(reg);
    const data = JSON.stringify(storeAppointmentData);
    localStorage.setItem("appointmentList", data);
    Swal.fire({
      title: "Appointment done!!",
      icon: "success",
      draggable: true,
    });
  }
};

const removeFromStoreDB = (reg) => {
  const storeAppointmentData = getAppointment();
  const updatedAppointments = storeAppointmentData.filter(
    (item) => item !== reg
  );
  localStorage.setItem("appointmentList", JSON.stringify(updatedAppointments));

  Swal.fire({
    title: "Appointment cancelled!",
    text: "The appointment has been removed successfully.",
    icon: "info",
  });
};


export { addToStoreDB, getAppointment,removeFromStoreDB };
