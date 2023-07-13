import { useState } from "react";

export const Slide = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const restartSlide = () => {
    setCurrentIndex(0);
  };
  const previousSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentSlide = slides[currentIndex];
  return (
    <>
      <div>
        <img
          src={currentSlide.thumbnail}
          alt={currentSlide.title}
          height="40"
          width="40"
        />
        <p>{currentSlide.title}</p>
        <p>{currentSlide.description}</p>
      </div>
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
