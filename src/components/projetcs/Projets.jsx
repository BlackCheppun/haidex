import React from 'react';
import Slider from "react-slick";
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projets.css';

const videoURL = '/assets/projet-bg.webm';

const images = {
  1: { imgURL: '/assets/projet-1.jpg' },
  2: { imgURL: '/assets/projet-2.jpg' },
  3: { imgURL: '/assets/projet-3.jpg' },
  4: { imgURL: '/assets/projet-1.jpg' },
  5: { imgURL: '/assets/projet-2.jpg' },
};


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="projets-slider-btn"
      style={{ right: "-16px" }}
      onClick={onClick}
    >
      <FaAngleRight size={32} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="projets-slider-btn"
      onClick={onClick}
      style={{ left: "-16px", zIndex: 1 }}
    >
      <FaAngleLeft size={32} />
    </div>
  );
}



function Projets() {

  const settings = {
    dots: true,
    speed: 300,
    touchMove: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
      >
        <ul style={{ margin: "0px", textAlign: 'center', padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
        }}
        className='projets-slider-dots'
      >
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,  // Match your 1200px media query
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,   // Match your 768px media query
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,   // Between tablet and small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,   // Match your 425px media query
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  }
  return (
    <div className="projets-container">
      <video autoPlay loop muted playsInline className="projets-bg-video">
        <source src={videoURL} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="projets-content">
        <h1>Nos Projets</h1>
        <div className="projets-tout-projet-btn">
          <p>Tous nos projets</p>
          <FaArrowRight />
        </div>
      </div>


      <div className='slider-container'>
        <Slider {...settings}>
          {Object.entries(images).map(([key, value]) => (
            <div key={key} className='carousel-image-wrapper'>
              <img src={value.imgURL} alt={`Projet ${key}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projets;
