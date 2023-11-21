// src/Components/Ui/ResultsDisplay.tsx
import React from 'react';
import Heading from '@/Components/Ui/Heading';
import Image from 'next/image';

interface ResultsDisplayProps {
  petType: 'cat' | 'dog';
  calculatedAge: number | null;
  lifeExpectancy: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  petType,
  calculatedAge,
  lifeExpectancy,
}) => {
  if (calculatedAge === null) return null;

  // Randomly choose between rendering the reaper or the angel
  const imageToShow = Math.random() < 0.5 ? '/reaper_bw.png' : '/angel.png';
  const altText = imageToShow === '/reaper_bw.png' ? 'Reaper' : 'Angel';

  return (
    <div className="results-container alert alert-success flex flex-col justify-between p-4 text-lg">
      <Heading title="Results" />

      <h2>
        {altText === 'Reaper' ? 'The Reaper Stalks' : 'An Angel Watches Over'}{' '}
        your {petType}
      </h2>
      <Image
        src={imageToShow}
        alt={altText}
        width={500}
        height={300}
        className="rounded-lg mt-0"
      />

      <p className="text-xl font-Poppins font-sans">
        Your {petType}&rsquo;s age in animal years is: {calculatedAge}
      </p>
      {lifeExpectancy && (
        <p className="text-xl font-Poppins font-sans">
          Life Expectancy: {lifeExpectancy} years
        </p>
      )}
    </div>
  );
};

export default ResultsDisplay;
