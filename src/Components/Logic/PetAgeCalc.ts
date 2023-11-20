//src/Components/Logic/PetAgeCalc.ts
'use client';
type BreedCategory = 'small' | 'medium' | 'large' | 'giant';

// Function to calculate cat age in cat years
function calculateCatAge(catHumanAge: number): number {
  if (catHumanAge === 0) {
    return 0;
  } else if (catHumanAge === 1) {
    return 15;
  } else if (catHumanAge === 2) {
    return 24;
  } else {
    return 24 + (catHumanAge - 2) * 4;
  }
}

// Function to calculate dog age in dog years
function calculateDogAge(
  dogHumanAge: number,
  breedCategory?: BreedCategory | undefined,
): number {
  const dogLifespan = {
    small: 12.5,
    medium: 10.5,
    large: 9,
    giant: 8,
  };

  const multiplier = breedCategory ? dogLifespan[breedCategory] : 10.5;

  if (dogHumanAge <= 2) {
    return dogHumanAge * multiplier;
  } else {
    return multiplier * 2 + (dogHumanAge - 2) * 4;
  }
}

// Function to get the average life expectancy based on species and breed
function getAverageLifeExpectancy(
  species: string,
  breedCategory?: BreedCategory | undefined,
): number {
  if (species === 'cat') {
    return 15; // Average lifespan for cats
  }

  const dogLifespan = {
    small: 14,
    medium: 12,
    large: 10,
    giant: 8,
  };

  return breedCategory ? dogLifespan[breedCategory] : 12; // Default to 12 if no breed category is provided
}

// Function to calculate life expectancy
function lifeExpectancy(
  humanAge: number,
  species: string,
  breedCategory?: BreedCategory | undefined,
): number {
  const averageLifeExpectancy = getAverageLifeExpectancy(
    species,
    breedCategory,
  );
  let animalAge =
    species === 'cat'
      ? calculateCatAge(humanAge)
      : calculateDogAge(humanAge, breedCategory);

  return Math.max(averageLifeExpectancy - animalAge, 0);
}

export { calculateCatAge, calculateDogAge, lifeExpectancy };
