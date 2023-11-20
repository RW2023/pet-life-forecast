// src/Components/PetAgeCalculator.tsx
'use client';
import React, { useState } from 'react';
import {
  calculateCatAge,
  calculateDogAge,
} from '@/Components/Logic/PetAgeCalc';
import { getLifeExpectancy } from './Logic/LifeExpectancy'; // Adjust the path as needed
import Image from 'next/image';
import ResultsDisplay from './Ui/ResultsDisplay'; // Adjust the path as needed

const PetAgeCalculator: React.FC = (): JSX.Element => {
  const [humanAge, setHumanAge] = useState<number>(0);
  const [petType, setPetType] = useState<'cat' | 'dog'>('cat');
  const [dogBreed, setDogBreed] = useState<
    'small' | 'medium' | 'large' | 'giant'
  >('medium');
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const age =
      petType === 'cat'
        ? calculateCatAge(humanAge)
        : calculateDogAge(humanAge, dogBreed);
    setCalculatedAge(age);
    setLifeExpectancy(getLifeExpectancy(petType, dogBreed));
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
      <div className="mb-4 md:mb-0 md:col-span-1">
        <form onSubmit={handleSubmit} className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-number text-xl font-sans">
              Enter your {petType}&rsquo;s human age:
            </span>
          </label>
          <input
            aria-label={`${petType}&rsquo;s Human Age`}
            type="number"
            className="input input-bordered w-full rounded text-lg font-sans"
            value={humanAge}
            onChange={(e) => setHumanAge(Number(e.target.value))}
          />
          <div className="rounded-md">
            {petType === 'cat' ? (
              <Image src="/cat.png" alt="cat" width={500} height={300} />
            ) : (
              <Image src="/dog.png" alt="dog" width={500} height={300} />
            )}
          </div>
          <label className="label text-lg font-sans">
            <span className="label-text text-lg font-sans">
              Select your pet type:
            </span>
          </label>
          <select
            aria-label="Pet Type"
            className="select select-bordered w-full text-lg font-sans"
            value={petType}
            onChange={(e) => setPetType(e.target.value as 'cat' | 'dog')}
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>

          {petType === 'dog' && (
            <>
              <label className="label text-lg font-sans">
                <span className="label-text text-lg font-sans">
                  Select your dog&rsquo;s breed size:
                </span>
              </label>
              <select
                aria-label="Dog Breed"
                className="select select-bordered w-full text-lg font-sans"
                value={dogBreed}
                onChange={(e) =>
                  setDogBreed(
                    e.target.value as 'small' | 'medium' | 'large' | 'giant',
                  )
                }
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="giant">Giant</option>
              </select>
            </>
          )}

          <button type="submit" className="btn btn-primary mt-4">
            Calculate {petType}&rsquo;s Age
          </button>
        </form>
      </div>
      <ResultsDisplay
        petType={petType}
        calculatedAge={calculatedAge}
        lifeExpectancy={lifeExpectancy}
      />
    </div>
  );
};

export default PetAgeCalculator;
