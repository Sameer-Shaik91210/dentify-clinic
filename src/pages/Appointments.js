import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function Appointments() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/appointments")
      .then((response) => {
        dispatch({ type: "SET_APPOINTMENTS", payload: response.data });
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {state.appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} - {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
