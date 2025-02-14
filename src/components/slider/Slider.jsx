import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FEEDBACKS } from "../../helpers/constants";

import "./slider.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const startX = useRef(0);
  const endX = useRef(0);

  const updateSlidesPerView = () => {
    if (window.innerWidth <= 600) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 950) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 1400) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const handleTouchStart = (event) => {
    startX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    endX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = startX.current - endX.current;
    const threshold = 50;

    if (deltaX > threshold) {
      changeSlide(currentIndex + 1);
    } else if (deltaX < -threshold) {
      changeSlide(currentIndex - 1);
    }
  };

  const changeSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(FEEDBACKS.length - 1);
    } else if (index > FEEDBACKS.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const offset = -(currentIndex * (100 / slidesPerView));

  return (
    <div className="slider">
      <div
        className="slider__container"
        style={{
          transform: `translateX(${offset}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {FEEDBACKS.map(({ id, image, description, name }, index) => (
          <article className="slider__slide" key={id}>
            <img
              className="slider__image"
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                transform: currentIndex === index ? "scale(1.1)" : "scale(1)",
              }}
              loading="lazy"
            />
            <AnimatePresence>
              {currentIndex === index && (
                <motion.div
                  className="slider__content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="slider__description">{description}</p>
                  <span className="slider__author">{name}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
      <button
        className="slider__prev"
        onClick={() => changeSlide(currentIndex - 1)}
        type="button"
        title="prev slide"
      ></button>
      <button
        className="slider__next"
        onClick={() => changeSlide(currentIndex + 1)}
        type="button"
        title="next slide"
      ></button>
    </div>
  );
};

export default Slider;
