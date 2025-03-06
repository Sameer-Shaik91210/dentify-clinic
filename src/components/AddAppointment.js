import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../Styles/AddAppointment.css";

function AddAppointment({ onClose }) {
  const { dispatch } = useContext(AppContext);
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_APPOINTMENT", payload: appointment });
    setAppointment({ date: "", time: "", name: "", contact: "" });
    onClose(); // Close the modal after submitting
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Book an Appointment</h2>

      <label className="form-label">
        Name:
        <input
          className="form-input"
          type="text"
          name="name"
          value={appointment.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </label>

      <label className="form-label">
        Contact:
        <input
          className="form-input"
          type="text"
          name="contact"
          value={appointment.contact}
          onChange={handleChange}
          placeholder="Enter your contact number"
          required
        />
      </label>

      <label className="form-label">
        Date:
        <input
          className="form-input"
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-label">
        Time:
        <input
          className="form-input"
          type="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
          required
        />
      </label>

      <div className="form-buttons">
        <button className="submit-button" type="submit">
          Add Appointment
        </button>
        <button className="cancel-button" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddAppointment;
