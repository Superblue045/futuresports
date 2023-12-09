import React from 'react';

// Functional component for displaying general information
const GeneralInfo = () => {
  return (
    // Container div with styles for padding, margin, and flex layout
    <div className="px-4 mx-auto lg:pt-16 lg:flex-row md:px-8" style={{ margin: 0 }}>
      
      {/* Section for general information with a gray color */}
      <div className="color-gray">
        
        {/* Title for the section */}
        <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" style={{ marginBottom: '20px' }}>
          General Information
        </h2>

        {/* Lorem Ipsum text for demonstration purposes */}
        {/* (Replace this with actual content) */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla...

        {/* Additional Lorem Ipsum text for demonstration purposes */}
        {/* (Replace this with actual content) */}
        Sed sodales nibh sit amet nulla efficitur auctor. Vivamus tempus, ligula sit amet aliquam iaculis, quam arcu sagittis ipsum, ac maximus ex nibh eu augue. Cras consectetur nisl non ipsum interdum sodales. Donec eu elit vel eros placerat elementum sit amet non erat. Sed sollicitudin neque ante, quis hendrerit libero faucibus in. Curabitur orci ligula, sodales non eros sed, bibendum volutpat turpis. Aliquam fermentum enim sit amet metus efficitur rhoncus. Aenean posuere urna eu orci ultrices ultricies. Sed massa purus, ultricies vel sagittis vitae, laoreet quis ante. Sed pretium malesuada arcu.<br />

      </div>
    </div>
  );
};

// Export the GeneralInfo component as the default export
export default GeneralInfo;
