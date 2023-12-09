import React from 'react';

const Calendar = () => {
  // Sample array of events
  const events = [
    {
      name: 'Event 1',
      date: '2023-12-15',
      description: 'Description for Event 1',
    },
    {
      name: 'Event 2',
      date: '2023-12-20',
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];

  return (
    <div className="flex items-center justify-center px-4 mx-auto lg:pt-16 lg:flex-row md:px-8" style={{ height: '50vh', margin: 0 }}>
      <div className="color-gray text-center">
        <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" style={{ marginTop: "20px" }}>
          Calendar of Events
        </h2>
        {events.map((event, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
