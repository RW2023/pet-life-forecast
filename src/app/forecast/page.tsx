//src/app/forecast/page.tsx
import React from 'react';
import AgeCalcForm from '@/Components/AgeCalcForm';

const PetAgeCalculator = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full lg:max-w-4xl mx-auto">
      <AgeCalcForm />
    </div>
  );
};

export default PetAgeCalculator;
