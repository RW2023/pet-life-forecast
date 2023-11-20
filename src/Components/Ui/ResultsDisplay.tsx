// src/Components/Ui/ResultsDisplay.tsx
import React from 'react';
import Heading from '@/Components/Ui/Heading'; // Adjust the path as needed

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

  return (
    <div className="results-container alert alert-success flex flex-col justify-between p-4">
      <Heading title="Results" />
      <p className="text-lg font-sans">
        Your {petType}&rsquo;s age in animal years is: {calculatedAge}
      </p>
      <p className="text-lg font-sans">
        The average life expectancy is: {lifeExpectancy} years
      </p>
    </div>
  );
};

export default ResultsDisplay;
