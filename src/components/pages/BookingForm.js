import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setSubmitted(true);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter appointment date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" placeholder="Enter appointment time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </Form.Group>

        <Button variant="primary" type="submit">Book Appointment</Button>
      </Form>
      {submitted && <div className="success-message">Appointment booked successfully!</div>}
    </div>
  );
};

export default BookingForm;



// import React, { useState } from 'react';
// import { Form, Button, Modal } from 'react-bootstrap';
// import './BookingForm.css';

// const BookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     setShowModal(true);
//   }

//   const handleClose = () => {
//     setShowModal(false);
//   }

//   return (
//     <>
//       <Form className="booking-form" onSubmit={handleSubmit}>
//         <Form.Group controlId="formName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
//         </Form.Group>

//         <Form.Group controlId="formEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </Form.Group>

//         <Form.Group controlId="formPhone">
//           <Form.Label>Phone number</Form.Label>
//           <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         </Form.Group>

//         <Form.Group controlId="formDate">
//           <Form.Label>Date</Form.Label>
//           <Form.Control type="date" placeholder="Enter appointment date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </Form.Group>

//         <Form.Group controlId="formTime">
//           <Form.Label>Time</Form.Label>
//           <Form.Control type="time" placeholder="Enter appointment time" value={time} onChange={(e) => setTime(e.target.value)} required />
//         </Form.Group>

//         <Button variant="primary" type="submit">Book Appointment</Button>
//       </Form>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Appointment booked!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Your appointment has been successfully booked.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default BookingForm;
