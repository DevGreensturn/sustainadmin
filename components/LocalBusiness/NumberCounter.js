"use client"

import React, { useState, useEffect } from 'react';

const NumberCounter = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const increment = Math.ceil(targetNumber / (duration / 1000)); // Increment per millisecond

  useEffect(() => {
    let timer;
    const updateCounter = () => {
      if (currentNumber < targetNumber) {
        const nextNumber = currentNumber + increment;
        setCurrentNumber(nextNumber > targetNumber ? targetNumber : nextNumber);
        timer = setTimeout(updateCounter, 1);
      }
    };
    updateCounter();

    return () => clearTimeout(timer);
  }, [currentNumber, targetNumber, increment]);

  return <div>{currentNumber}</div>;
};

export default NumberCounter;