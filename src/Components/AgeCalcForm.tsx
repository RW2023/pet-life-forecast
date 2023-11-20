import React, { useState } from 'react';
import {
  calculateCatAge,
  calculateDogAge,
} from '@/Components/Logic/PetAgeCalc';
import Image from 'next/image';
import Heading from '@/Components/Ui/Heading';

const PetAgeCalculator: React.FC = (): JSX.Element => {
  const [humanAge, setHumanAge] = useState<number>(0);
  const [petType, setPetType] = useState<'cat' | 'dog'>('cat');
  const [dogBreed, setDogBreed] = useState<
    'small' | 'medium' | 'large' | 'giant'
  >('medium');
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const age =
      petType === 'cat'
        ? calculateCatAge(humanAge)
        : calculateDogAge(humanAge, dogBreed);
    setCalculatedAge(age);
  };

  return (
    <div className="container mx-7 p-4 grid grid-cols-2 gap-4 border-x-headline">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Enter your {petType}&rsquo;s human age:
            </span>
          </label>
          <input
            aria-label={`${petType}&rsquo;s Human Age`}
            type="number"
            className="input input-bordered w-full max-w-xs rounded"
            value={humanAge}
            onChange={(e) => setHumanAge(Number(e.target.value))}
          />
          {petType === 'cat' ? (
            <Image src="/cat.png" alt="cat" width={500} height={300} />
          ) : (
            <Image src="/dog.png" alt="dog" width={500} height={300} />
          )}
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

          {petType === 'dog' && (
            <>
              <label className="label">
                <span className="label-text">
                  Select your dog&rsquo;s breed size:
                </span>
              </label>
              <select
                aria-label="Dog Breed"
                className="select select-bordered w-full max-w-xs"
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

      {calculatedAge !== null && (
        <div className="results-container alert alert-success mt-4 w-full">
          <Heading title="Results" />
          <p>
            Your {petType}&rsquo;s age in animal years is: {calculatedAge}
          </p>
        </div>
      )}
    </div>
  );
};

export default PetAgeCalculator;
