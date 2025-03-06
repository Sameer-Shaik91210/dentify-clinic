import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Modal from "./Modal";
import AddAppointment from "./AddAppointment";
import BookAppointmentButton from "./BookAppointmentButton";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle appointment modal
  const toggleModal = () => setShowModal(!showModal);

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">
        <h2>Dentify Clinic</h2>
      </div>

      {/* Hamburger Icon (for mobile view) */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar (for mobile) + Navbar Links (for larger screens) */}
      <ul className={`navbar-links ${isSidebarOpen ? "open" : ""}`}>
        {["Home", "Services", "Blogs", "Gallery", "About Us", "Contact Us"].map(
          (item, index) => (
            <li key={index} onClick={toggleSidebar}>
              <Link to={item === "Services" ? "/appointment" : "/"}>
                {item}
              </Link>
            </li>
          )
        )}

        {/* Book Appointment Button (in sidebar for mobile) */}
        <div className="sidebar-book-btn">
          <BookAppointmentButton onClick={toggleModal} />
        </div>
      </ul>

      {/* Book Appointment Button (in navbar for desktop) */}
      <BookAppointmentButton onClick={toggleModal} />

      {/* Modal */}
      {showModal && (
        <Modal onClose={toggleModal}>
          <AddAppointment onClose={toggleModal} />
        </Modal>
      )}
    </nav>
  );
}

export default Navbar;
