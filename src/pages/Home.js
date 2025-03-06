import React, { useState } from "react";
import Modal from "../components/Modal";
import AddAppointment from "../components/AddAppointment";
import BookAppointmentButton from "../components/BookAppointmentButton";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <BookAppointmentButton onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <AddAppointment onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
