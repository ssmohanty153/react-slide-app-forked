import { useState } from "react";

export const Slide = ({ setCurrentIndex, currentIndex }) => {
  const restartSlide = () => {
    setCurrentIndex(0);
  };
  const previousSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className="slide-control">
        <button onClick={restartSlide} disabled={currentIndex === 0}>
          Restart
        </button>
        <button onClick={previousSlide} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={nextSlide} disabled={currentIndex === slides.length}>
          Next
        </button>
      </div>
    </>
  );
};
