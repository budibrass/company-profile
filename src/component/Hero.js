import React from 'react';

const Hero = ({ heroImg, heroAlt }) => {
  return (
    <>
    <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={heroImg} className="d-block w-100" alt={heroAlt} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;