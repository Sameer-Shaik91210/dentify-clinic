import React, { useState } from "react";
import Modal from "../components/Modal";
import AddAppointment from "../components/AddAppointment";
import BookAppointmentButton from "../components/BookAppointmentButton";
import heroImg from "../images/heroimg.jpg";
import img1 from "../images/img1.jpg";
import "../Styles/Home.css";
function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="home">
      {/* Hero Section  */}
      <section class="hero">
        <img
          src="../images/heroimg.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div class="hero-content">
          <h1>Welcome to Dentify Clinic</h1>
          <p>Your smile, our priority. Book an appointment today!</p>
          <BookAppointmentButton onClick={toggleModal} />
          {showModal && (
            <Modal onClose={toggleModal}>
              <AddAppointment onClose={toggleModal} />
            </Modal>
          )}
        </div>
      </section>
      {/* About Section  */}
      <section class="about">
        <div class="about-image">
          <img src={img1} alt="Dentify Clinic" />
        </div>
        <div class="about-text">
          <h2>About Dentify Clinic</h2>
          <p>
            We provide world-class dental care with advanced technology and
            expert dentists. Our mission is to make every smile beautiful and
            healthy.
          </p>
        </div>
      </section>
      {/* Services Section  */}
      <section class="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <h4 className="card">Braces & Aligners</h4>
          <h4 className="card">Teeth Cleaning</h4>
          <h4 className="card">Root Canal</h4>
          <h4 className="card">Teeth Whitening</h4>
        </div>
      </section>
    </div>
  );
}

export default Home;
