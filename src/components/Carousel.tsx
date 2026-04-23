import React, { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
  itemWidth: number;
  numberOfItems: number;
  step: number;
  animationDuration?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  itemWidth,
  numberOfItems,
  step,
  animationDuration = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev =>
      Math.min(prev + step, images.length - numberOfItems),
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - step, 0));
  };

  return (
    <div className="Carousel">
      <div
        className="Carousel__window"
        style={{ width: `${itemWidth * numberOfItems}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            transition: `transform ${animationDuration}ms ease-in-out`,
          }}
        >
          {images.map((image, index) => (
            <li
              key={index}
              className="Carousel__item"
              style={{ width: `${itemWidth}px` }}
            >
              <img src={image} alt={`image ${index + 1}`} width={itemWidth} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="Carousel__button"
        onClick={handlePrev}
        disabled={currentIndex === 0}
        data-cy="prev"
      >
        Prev
      </button>
      <button
        type="button"
        className="Carousel__button"
        onClick={handleNext}
        disabled={currentIndex >= images.length - numberOfItems}
        data-cy="next"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
