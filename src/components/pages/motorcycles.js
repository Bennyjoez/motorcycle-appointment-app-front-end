import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../stylesheets/motorcycles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MotorCard from '../motor-card';
import Navbar from '../navbar';

const Motorcycles = () => {
  const motorcycles = useSelector((state) => state.state.motorcycles);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="motorcycles-main-container">
      <section className="details-nav-container">
        <Navbar />
      </section>
      <section className="page-body">
        <div className="title-container">
          <h2>Latest Model</h2>
          <p>please select your choice</p>
        </div>
        <hr className="separate" />
        <div className="motorcycles-container">
          {motorcycles.message === 'loading' ? (
            <div className="loading-msg"> Loading...</div>
          ) : (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Slider {...settings}>
              {
                motorcycles.motorcycles.map((motor) => (
                  <Link
                    to={`/motorcycles/${motor.id}/details`}
                    className="card-link"
                    key={motor.id}
                  >
                    <MotorCard
                      name={motor.name}
                      imgUrl={motor.image}
                      description={motor.description}
                    />
                  </Link>
                ))
              }
            </Slider>
          )}
        </div>
      </section>
    </div>
  );
};

export default Motorcycles;
