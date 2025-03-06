import React from "react";
import "../Styles/Button.css"; // Optional: Create a shared style for buttons

function BookAppointmentButton({ onClick }) {
  return (
    <button className="book-btn" onClick={onClick}>
      Book Appointment
    </button>
  );
}

export default BookAppointmentButton;
