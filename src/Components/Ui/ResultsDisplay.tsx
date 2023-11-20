// src/Components/ResultsDisplay.tsx
import React from 'react';
import Heading from '@/Components/Ui/Heading';

interface ResultsDisplayProps {
  petType: 'cat' | 'dog';
  calculatedAge: number | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ petType, calculatedAge }) => {
  if (calculatedAge === null) return null;

  return (
    <div className="results-container alert alert-success flex flex-col justify-between p-4">
      <Heading title="Results" />
      <p className="text-lg font-sans">
        Your {petType}&rsquo;s age in animal years is: {calculatedAge}
      </p>
    </div>
  );
};

export default ResultsDisplay;
