'use client';
import React, { useState } from 'react';
import {
  calculateCatAge,
  calculateDogAge,
} from '@/Components/Logic/PetAgeCalc';
import AgeCalcForm from '@/Components/AgeCalcForm';

const PetAgeCalculator = () => {
  const [humanAge, setHumanAge] = useState<number>(0);
  const [petType, setPetType] = useState<'cat' | 'dog'>('cat');
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const age =
      petType === 'cat' ? calculateCatAge(humanAge) : calculateDogAge(humanAge);
    setCalculatedAge(age);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 lg:p-12 w-full lg:max-w-4xl mx-auto">
      <AgeCalcForm />
    </div>
  );
};

export default PetAgeCalculator;
