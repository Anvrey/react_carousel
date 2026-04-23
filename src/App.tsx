import React, { useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';
import { CarouselSettings } from './components/CarouselSettings';

const App: React.FC = () => {
  const images = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
  ];

  const [itemWidth, setItemWidth] = useState(130);
  const [numberOfItems, setNumberOfItems] = useState(3);
  const [step, setStep] = useState(3);
  const [animationDuration, setAnimationDuration] = useState(1000);

  return (
    <div className="App">
      <h1 data-cy="title">Carousel with {images.length} images</h1>

      <CarouselSettings
        currentWidth={itemWidth}
        onWidthChange={setItemWidth}
        numberOfItems={numberOfItems}
        onNumberOfItems={setNumberOfItems}
        step={step}
        onStepChange={setStep}
        animationDuration={animationDuration}
        onAnimationDuration={setAnimationDuration}
      />

      <Carousel
        images={images}
        itemWidth={itemWidth}
        numberOfItems={numberOfItems}
        step={step}
        animationDuration={animationDuration}
      />
    </div>
  );
};

export default App;
