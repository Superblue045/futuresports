import React, { useState } from 'react';

const Competitions = () => {
  const [entryData, setEntryData] = useState({
    playerName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    playerName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntryData({
      ...entryData,
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

    // Basic validation example, you can enhance it based on your requirements
    if (!entryData.playerName.trim()) {
      newErrors.playerName = 'Player Name is required';
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entryData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!/^\d{10}$/.test(entryData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
      valid = false;
    }

    if (!entryData.message.trim()) {
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
      console.log('Form submitted:', entryData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl" style={{margin: 0}}>
      <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 color-gray text-center">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Competition Details
          </h2>
          <p>
            Upcoming Competitions<br />
            <br />
            Under 15 - Youth Camp<br />
            9th Jan 2024<br />
            <br />
            
          </p>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Entry Form
          </h2>
        </div>

        {/* Entry Form */}
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="playerName" className="block mb-2">Player Name:</label>
            <input
              type="text"
              id="playerName"
              name="playerName"
              value={entryData.playerName}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded ${errors.playerName && 'border-red-500'}`}
              required
            />
            {errors.playerName && <p className="text-red-500">{errors.playerName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={entryData.email}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded ${errors.email && 'border-red-500'}`}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={entryData.phoneNumber}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded ${errors.phoneNumber && 'border-red-500'}`}
              required
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={entryData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full p-2 border border-gray-300 rounded ${errors.message && 'border-red-500'}`}
              required
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit Entry
          </button>
        </form>
      </div>
    </div>
  );
}

export default Competitions;
