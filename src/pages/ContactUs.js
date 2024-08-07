import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'; // Import custom CSS for additional styles

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05t3iv1', 'template_0c4s2m1', form.current, 'ppY_na8bRAOcxMcyA')
      .then(
        () => {
          console.log('SUCCESS!');
          setFormSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      sendEmail(e);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below to send us your feedback.</p>
        {formSubmitted ? (
          <div className="alert alert-success" role="alert">
            Thank you for your feedback!
          </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
