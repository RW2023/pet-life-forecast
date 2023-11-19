import React, { useState } from 'react';
import {
  calculateCatAge,
  calculateDogAge,
} from '@/Components/Logic/PetAgeCalc';

interface Props {}

const PetAgeCalculator: React.FC<Props> = (props): JSX.Element => {
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
    <div className="container mx-7  p-4 grid grid-cols-2 gap-4">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter your pet&apos;s human age:</span>
          </label>
          <input
            aria-label="Pet's Human Age"
            type="number"
            className="input input-bordered w-full max-w-xs"
            value={humanAge}
            onChange={(e) => setHumanAge(Number(e.target.value))}
          />

          <label className="label">
            <span className="label-text">Select your pet type:</span>
          </label>
          <select
            aria-label="Pet Type"
            className="select select-bordered w-full max-w-xs"
            value={petType}
            onChange={(e) => setPetType(e.target.value as 'cat' | 'dog')}
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>

          <button type="submit" className="btn btn-primary mt-4">
            Calculate Age
          </button>
        </form>
      </div>

      {calculatedAge !== null && (
        <div className="results-container alert alert-info mt-4 w-full">
          Your pet&apos;s age in animal years is: {calculatedAge}
        </div>
      )}
    </div>
  );
};

export default PetAgeCalculator;
