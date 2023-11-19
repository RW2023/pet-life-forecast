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
   <AgeCalcForm />
  );
};

export default PetAgeCalculator;
