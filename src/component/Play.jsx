// Import necessary modules and components from React and react-slick library
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Functional component Play
const Play = () => {
  // Settings for the Slider component
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // JSX structure for the Play component
  return (
    // Container with flex layout and styling
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      {/* Container for the slider and additional content */}
      <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        {/* React Slick slider component with specified settings */}
        <Slider {...sliderSettings} className="w-full">
          {/* Individual slides with images */}
          <div>
            <img src="images/play/1.jpg" alt="PIC1" className="w-full" />
          </div>
          <div>
            <img src="images/play/2.jpg" alt="PIC2" className="w-full" />
          </div>
          <div>
            <img src="images/play/3.jpg" alt="PIC3" className="w-full" />
          </div>
          <div>
            <img src="images/play/4.jpg" alt="PIC4" className="w-full" />
          </div>
          <div>
            <img src="images/play/5.jpg" alt="PIC5" className="w-full" />
          </div>
          {/* Add more divs with images as needed */}
        </Slider>
        {/* Additional content below the slider */}
        <div className="max-w-xl mb-6 color-gray text-center">
          {/* Heading for the section */}
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Let's Play Tennis
          </h2>
          {/* Subtext or description for the section */}
          <div className="small-font-20">
            gldfjg l dsfglkjsdlfgkj fgdlldfgk jldsfg j<br />
            gldfjg l dsfglkjsdlfgkj fgdlldfgk jldsfg j
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Play component as the default export of the module
export default Play;
