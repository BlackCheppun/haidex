import React from 'react';
import Slider from "react-slick";
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projets.css';
import { useEffect, useState } from 'react';


const videoURL = '/assets/projet-bg.webm';


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

  const [projets, setProjets] = useState([]);

  const [selectedProjet, setSelectedProjet] = useState(null);

  useEffect(() => {
    fetch('/Projets_haidex.json')
      .then((response) => response.json())
      .then((data) => setProjets(data.projets))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);
  const settings = {
    dots: true,
    speed: 300,
    touchMove: true,
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
      </div>


      <div className='slider-container'>
        <Slider {...settings}>

          {projets && projets.map((projet, index) => (
            <div
              key={index}
              className='carousel-image-wrapper'
              onClick={() => setSelectedProjet(projet)}
            >
              <img src={projet.image_projet} alt={`Projet ${index + 1}`} className="carousel-image" />
            </div>
          ))}

        </Slider>


        {selectedProjet && (
          <div className="projets-modal-backdrop" onClick={() => setSelectedProjet(null)}>
            <div className="projets-modal" onClick={e => e.stopPropagation()}>

              {/* Project Image */}
              <img
                src={selectedProjet.image_projet}
                alt={selectedProjet.localisation}
                className="projets-modal-image"
              />

              {/* Title */}
              <h2 className="projets-modal-title">{selectedProjet.localisation}</h2>

              {/* Client Info */}
              <p className="projets-modal-client"><strong>Client :</strong> {selectedProjet.client.nom}</p>

              {/* Client Logo (optional, if available) */}
              {selectedProjet.client.logo && (
                <img
                  src={selectedProjet.client.logo}
                  alt="Logo client"
                  className="projets-modal-logo"
                />
              )}

              {/* Travaux réalisés */}
              <div className="projets-modal-travaux">
                <p><strong>Travaux réalisés :</strong></p>
                {Object.entries(selectedProjet.travaux_realises).map(([key, value]) => (
                  value && (
                    <p key={key}>
                      <strong>{key} :</strong> {value}
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Projets;
