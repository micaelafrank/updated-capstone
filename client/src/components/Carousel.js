import React from 'react'


function UserCarousal() {

    // console.log(one);

    return (
        <Carousel
            className="mainCarousal"
            style={{ marginTop: "1rem" }}
            fade
            interval={3000}
        >
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={one} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={two} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={three} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={four} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={five} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={six} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={seven} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={eight} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={nine} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={ten} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={eleven} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={twelve} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={thirteen} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={fourteen} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item className="text-center">
                <img className="carousalImages" src={fifteen} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default UserCarousal