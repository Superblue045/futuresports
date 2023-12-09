import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Play = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl" style={{margin: 0}}>
      <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <Slider {...sliderSettings}>
          <div>
            <img src="images/play/1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="images/play/2.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="images/play/3.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="images/play/4.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="images/play/5.jpg" alt="Image 1" />
          </div>
          {/* Add more divs with images as needed */}
        </Slider>
        <div className="max-w-xl mb-6 color-gray">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Let's Play Tennis
          </h2>
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

export default Play;
