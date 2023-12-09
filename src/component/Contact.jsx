import React, { useState } from 'react';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });

    // Reset the error message when the user starts typing again
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!contactData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!contactData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Form is valid, add your logic to handle the form submission
      console.log('Form submitted:', contactData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6 color-gray">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Contact Details
          </h2>
          <div className="small-font-20">
            <p>
              gldfjg l dsfglkjsdlfgkj fgdlldfgk jldsfg j<br />
              0400 000 000
            </p>
            <p>
              gfdhs  gfdkhhgkjds fdgk dgfkkhdsfg gdfkh<br />
              0400 000 000
            </p>
            <p>1 Main Street, Tennis Town 0000</p>
          </div>
        </div>
      </div>
      <div className="max-w-xl">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
          Contact Form
        </h2>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded ${errors.name && 'border-red-500'}`}
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded ${errors.email && 'border-red-500'}`}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={contactData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full p-2 border border-gray-300 rounded ${errors.message && 'border-red-500'}`}
              required
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
